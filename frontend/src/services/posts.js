const baseUrl = '/api/posts'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const response = await fetch(baseUrl)
  const commits = await response.json()
  return commits
}

const create = async newObject => {
  const config = {
    method: 'POST',
    headers: { Authorization: token, 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(newObject)
  }
  console.log(config)
  const response = await fetch(baseUrl, config)
  const result = await response.json()
  return result
}

const update = async (id, newObject) => {
  const config = {
    method: 'PUT',
    headers: { Authorization: token, 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(newObject)
  }
  const response = await fetch(`${ baseUrl }/${id}`,config)
  const result = await response.json()
  console.log(result, 'result')
  return result
}


const createComment = async (id, newObject) => {
  const config = {
    method: 'POST',
    headers: { Authorization: token, 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(newObject)
  }
  console.log(config)
  const response = await fetch(`${baseUrl}/${id}/comments`, config)
  const result = await response
  console.log(result)
  return result
}

export default { getAll, create, update, createComment, setToken }