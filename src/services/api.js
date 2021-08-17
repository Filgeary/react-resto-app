export default class Api {
  #baseUrl = 'http://localhost:3000/menu'

  getAllItems = async () => {
    const result = await fetch(this.#baseUrl)

    if (!result.ok) {
      throw new Error(
        `Failed to fetch ${this.#baseUrl}, status: ${result.status}`,
      )
    }

    return await result.json()
  }
}
