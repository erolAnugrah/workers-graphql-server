module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {

      return dataSources.pokemonAPI.getPokemon(id)
    },
    version: async () => {
      return "1.0.02"
    }
    // clusterCategory: async (_source, { param }, { dataSources }) => {
    //   console.log(param)
    //   return dataSources.clusterCategory.getClusterCategories(param)
    // }
    
  },
}
