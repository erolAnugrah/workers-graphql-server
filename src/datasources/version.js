const { RESTDataSource } = require('apollo-datasource-rest')

class VersionAPI extends RESTDataSource {
  constructor() {
    super()
  }

  async getVersion() {
    return '1.0.11'
  }
}


module.exports = VersionAPI
