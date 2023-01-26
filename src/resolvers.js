module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {

      return dataSources.pokemonAPI.getPokemon(id)
    },
    version: async (_source,{ dataSources }) => {
      return dataSources.version.getVersion()
    }
    // clusterCategory: async (_source, { param }, { dataSources }) => {
    //   console.log(param)
    //   return dataSources.clusterCategory.getClusterCategories(param)
    // }
    
  },
}
