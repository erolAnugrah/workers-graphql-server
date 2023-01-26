const { RESTDataSource } = require('apollo-datasource-rest')

class PokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemon(id) {
    const data = await this.get(`pokemon/${id}`)
    console.log(data)
    return data
  }
}

module.exports = PokemonAPI
