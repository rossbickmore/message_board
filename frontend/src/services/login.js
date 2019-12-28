const baseUrl = '/api/login'

const login = async credentials => {
  const config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(credentials)
  }
  console.log(config.body)
  const response = await fetch(baseUrl, config)
  const result = await response.json()
  return result
}

export default { login }

