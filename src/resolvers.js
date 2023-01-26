module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },
    version: async (_source, {}, {}) => {
      return "1.0.21"
    }
  },
}
