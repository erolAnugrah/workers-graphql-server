module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },
    version: async (_source, __, { dataSources }) => {
      return dataSources.versionAPI.getVersion()
    },
    clusterCategories: async (_source, __, { dataSources }) => {
      return dataSources.clusterCategoryAPI.getClusterCategories()
    },
    masterpiece: async (_source, {mid}, { dataSources }) => {
      return dataSources.masterpieceAPI.getMasterpieces(mid)
    }
  }
}
