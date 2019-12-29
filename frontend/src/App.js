import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from 'react-router-dom'
import PostForm from './components/PostForm'
import Post from './components/Post'
import postService from './services/posts'
import loginService from './services/login'
import LoginForm from './components/LoginForm'
import styled from 'styled-components'
import Page from './components/Page'
import { FaPen, FaCalendarAlt, FaThumbsUp, FaComments } from 'react-icons/fa';

const Button = styled.button`
  width: 100%;
  background: ${props => props.theme.red};
  color: white;
  border: 0;
  font-weight: 600;
  padding: 0.5rem 1.2rem;
  font-size: 2rem;
  cursor: pointer;
`
const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  a {
    background: white;
    color: grey;
    margin-left: 20px;
    font-size: 1.5em;
  }
  .logo {
    font-weight: 900;
    color: black;
  }
`
const SortContainer = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: center;
  color: red;
  .sort-btn {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    flex-grow: 1;
    cursor: pointer;
    text-align: center;
    border: 1px solid ${props => props.theme.offWhite};
    
  }
`
function App() {
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [comment, setComment] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [user, setUser] = useState(null)
  const [expandForm, setExpandForm] = useState(false)
  const [sortDate, setSortDate] = useState(false)
  const [sortLikes, setSortLikes] = useState(false)
  const [sortComments, setSortComments] = useState(false)
  
  console.log(sortDate, sortLikes, sortComments)
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
    postService.createComment(id, newComment)
    const postToAddCommentTo = posts.find( post => post.id === id )
    postToAddCommentTo.comments.concat(newComment)
    setComment("")
  }

  const addLike = (id) => {
    const post = posts.find(post => post.id === id)
    const changedPost = { ...post, likes: post.likes + 1 }
    postService
      .update(id, changedPost)
      .then(returnedPost => {
        returnedPost.comments = post.comments
        setPosts(posts.map(post => post.id !== id ? post : returnedPost))
      })
      .catch(error => {
        setErrorMessage(
          `post '${post.content}' was already  from server`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setPosts(posts.filter(post => post.id !== id))
      })
  }

  const applySort = (posts) => {
    if (sortDate) {
      posts.sort( (a,b) => new Date(a.date) - new Date(b.date))
      setSortLikes(false)
      setSortComments(false)

    }  
    if (sortLikes) {
      posts.sort( (a,b) => a.likes - b.likes)
      setSortDate(false)
      setSortComments(false)
    } 
    if (sortComments) {
      posts.sort( (a,b) => a.comments.length - b.comments.length)
      setSortDate(false)
      setSortLikes(false)
    }
    return posts
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
    <Page>
    <Router>
      <Navbar>
        <div>
        <Link to="/"><span className="logo">FlipPad</span></Link>
        </div>
        <div>
          {!user && 
            <div>
                <Link to="/login">Login</Link>
                <Link to="/signup">SignUp</Link>
            </div>
          }
          {user &&
            <div>
              <Link onClick={handleLogout}>Logout</Link>
            </div>
        }
        </div>
      </Navbar>
      <Route path="/login" render={() =>
        user ? <Redirect to="/"/> : loginForm()}
      />
      <Route path="/" render={() => 
        <div>
          <div>
            { user && <Button onClick={() => setExpandForm(!expandForm)}>Write a post     <FaPen /></Button>}
            { user && expandForm &&
            <PostForm 
            title={title} 
            content={content} 
            onTitleChange={({target}) => setTitle(target.value)}
            onContentChange={({target}) => setContent(target.value)}
            addPost={addPost}
            />
            }
            <SortContainer>
              <div className="sort-btn" onClick={() => setSortDate(!sortDate)}>Sort by date <FaCalendarAlt /></div>
              <div className="sort-btn" onClick={() => setSortLikes(!sortLikes)}>Sort by likes <FaThumbsUp /></div>
              <div className="sort-btn" onClick={() => setSortComments(!sortComments)}>Sort by comments <FaComments /></div>
            </SortContainer>
          </div>
          <div class="PostBoard">
            { posts && applySort(posts).map( post => (
            <Post 
            {...post} 
            addLike={addLike}
            key={post.id} 
            currentUser={user}
            comment={comment}
            addComment={addComment}
            handleCommentChange={({target}) => setComment(target.value)}
            />
            ))}
          </div>
        </div>
      }/>
    </Router>
    </Page>
  );
}

export default App;
