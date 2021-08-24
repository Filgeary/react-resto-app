export default class Api {
  #getUrl = 'http://localhost:3000/menu'
  #postUrl = 'https://jsonplaceholder.typicode.com/posts'

  getAllMenuItems = async () => {
    const result = await fetch(this.#getUrl)

    if (!result.ok) {
      throw new Error(
        `Failed to fetch ${this.#getUrl}, status: ${result.status}`,
      )
    }

    return await result.json()
  }

  getMenuItemById = async id => {
    const result = await fetch(this.#getUrl + `/${id}`)

    if (!result.ok) {
      throw new Error(
        `Failed to fetch ${this.#getUrl + `/${id}`}, status: ${result.status}`,
      )
    }

    return await result.json()
  }

  postDataJSON = async data => {
    const result = await fetch(this.#postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!result.ok) {
      throw new Error(
        `Failed to fetch ${this.#postUrl}, status: ${result.status}`,
      )
    }

    return await result.json()
  }
}
