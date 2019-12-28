import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import PostForm from './components/PostForm'
import Post from './components/Post'
import postService from './services/posts'
import loginService from './services/login'
import LoginForm from './components/LoginForm'

function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [comment, setComment] = useState("")
  const [comments, setComments] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    postService.getAll()
    .then( data => setPosts(data))
  })

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPostappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      postService.setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password,
      })
      window.localStorage.setItem(
        'loggedPostappUser', JSON.stringify(user)
      )       
      postService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    setUser(null)
    window.localStorage.clear()
    setUsername('')
    setPassword('')
  }


  const addPost = e => {
    e.preventDefault()
    const newPost = {
      title: title,
      content: content,
      id: posts.length + 1
    }
    postService.create(newPost).then( data => setPosts(posts.concat(data)))
    setTitle('')
    setContent('')
  }

  const addComment = (e, id) => {
    e.preventDefault()
    const newComment = {
      content: comment,
    }
    postService.createComment(newComment, id).then( data => setComments(comments.concat(data)))
    const postToAddCommentTo = posts.find( post => post.id === id )
    postToAddCommentTo.comments.concat(newComment)
    setComment("")
  }

  const loginForm = () => (
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={({ target }) => setUsername(target.value)}
      handlePasswordChange={({ target }) => setPassword(target.value)}
      handleSubmit={handleLogin}
    />
  )

  return (
    <div>
    <Router>
      <div>
        {!user && 
          <div>
              <Link to="/posts">Posts</Link>
              <Link to="/login">Login</Link>
              <Link to="/signup">SignUp</Link>
          </div>
        }
        {user &&
          <div>
            <Link to="/posts">Posts</Link>
            <Link onClick={handleLogout}>Logout</Link>
          </div>
        }
      </div>
      <Route path="/posts" render={() => 
        <div>
          <div>
            <h1>Message Board</h1>
            <PostForm 
            title={title} 
            content={content} 
            onTitleChange={({target}) => setTitle(target.value)}
            onContentChange={({target}) => setContent(target.value)}
            addPost={addPost}
            />
          </div>
          <div class="PostBoard">
            { posts && posts.map( post => (
            <Post 
            {...post} 
            key={post.id} 
            comment={comment}
            addComment={addComment}
            handleCommentChange={({target}) => setComment(target.value)}
            />
            ))}
          </div>
        </div>
      }/>
      <Route path="/login" render={() =>
        user ? <Redirect to="/"/> : loginForm()}
      />
    </Router>
      
    </div>
  );
}

export default App;
