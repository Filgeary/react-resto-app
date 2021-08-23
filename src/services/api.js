export default class Api {
  #baseUrl = 'http://localhost:3000/menu'
  #postUrl = 'http://localhost:3000/orders'

  getAllMenuItems = async () => {
    const result = await fetch(this.#baseUrl)

    if (!result.ok) {
      throw new Error(
        `Failed to fetch ${this.#baseUrl}, status: ${result.status}`,
      )
    }

    return await result.json()
  }

  getMenuItemById = async id => {
    const result = await fetch(this.#baseUrl + `/${id}`)

    if (!result.ok) {
      throw new Error(
        `Failed to fetch ${this.#baseUrl + `/${id}`}, status: ${result.status}`,
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
