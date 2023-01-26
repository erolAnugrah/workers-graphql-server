module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },
    version: async (_source, __, { dataSources }) => {
      return dataSources.versionAPI.getVersion()
    },
    clusterCategory: async (_source, __, { dataSources }) => {
      console.log(param)
      return dataSources.clusterCategoryAPI.getClusterCategories()
    }
  }
}
