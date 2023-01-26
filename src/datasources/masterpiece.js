const { RESTDataSource } = require('apollo-datasource-rest')

class MasterpieceAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://rc-api.kayazta.id/v1'
  }

  async getMasterpieces(id) {
    console.log(id)
    let target = '/masterpiece'
    if (id) {
      target +=`?masterpieceId=${id}`
    }
    console.log(target)
    const data = await this.get(target)
    console.log(data)

    return data.data;
  }
}

module.exports = MasterpieceAPI
