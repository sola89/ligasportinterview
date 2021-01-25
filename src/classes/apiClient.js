class ApiClient {
  constructor (url) {
    this.url = url
  }

  async getData () {
    const response = await fetch(this.url)

    return response.json()
  }
}

export default ApiClient
