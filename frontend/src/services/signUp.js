const baseUrl = '/api/users'

const signUp = async credentials => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(credentials)
  }
  console.log(config.body)
  const response = await fetch(baseUrl, config)
  console.log(response)
  const result = await response.json()
  return result
}

export default { signUp }

