const postsRouter = require('express').Router()
const Post = require('../models/post')
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')


postsRouter.get('/', async (request, response) => {
  const posts = await Post.find({}).populate('user').populate('comments')
  response.json(posts.map(post => post.toJSON()))
})

postsRouter.get('/:id', (request, response, next) => {
  Post.findById(request.params.id)
    .then(post => {
      if (post) {
        response.json(post.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

const getTokenFrom = request => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7)
  }
  return null
}

postsRouter.post('/', async (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const post = new Post({
      title: body.title,
      content: body.content,
      date: new Date(),
      user: user._id
    })
    const savedPost = await post.save()
    user.posts = user.posts.concat(savedPost._id)
    await user.save() 
  } catch (exception) {
    next(exception)
  }
})



postsRouter.delete('/:id', (request, response, next) => {
  Post.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

postsRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  const post = {
    title: body.title,
    content: body.content,
    date: body.date,
    likes: body.likes
  }
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const postToUpdate = await Post.findByIdAndUpdate(request.params.id, post, { new: true })
    const savedPost = await postToUpdate.save()
    user.posts = user.posts.concat(savedPost._id)
    await user.save() 
    response.json(savedPost.toJSON())
  } catch (exception) {
    next(exception)
  }
})
//comments

postsRouter.post('/:id/comments', async (request, response, next) => {
  const body = request.body
  const token = getTokenFrom(request)
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
      return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const post = await Post.findById(request.params.id)
    console.log(post)
    console.log(user)
    const comment = new Comment({
      content: body.content,
      date: new Date(),
      user: user._id,
      post: post._id
    })
    const savedComment = await comment.save()
    user.comments = user.comments.concat(savedComment._id)
    post.comments = post.comments.concat(savedComment._id)
    await user.save() 
    await post.save() 
  } catch (exception) {
    next(exception)
  }
})

postsRouter.get('/:id/comments', async (request, response) => {
  const comments = await Comment.find({}).populate('posts')
  response.json(comments.map(comment => comment.toJSON()))
})


module.exports = postsRouter