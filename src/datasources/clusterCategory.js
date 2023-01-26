const { RESTDataSource } = require('apollo-datasource-rest')

class ClusterCategoryAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://contents.visionplus.id/api/v1/contents/'
  }

  async getClusterCategories(id) {
    return this.get(`clustercategories`)
  }

  async getClusterCategoriesWithPage(param) {
    let params = {}
    console.log(param);
    if (param.pageNo) {
      params['page'] = pageNo
    }
    if (param.pageSize) {
      params['limit'] = pageSize
    }
    console.log(params)
    const data = await this.get('clustercategories', {
      params: params
    });
    console.log(data)

    return data.data;
  }
}


module.exports = ClusterCategoryAPI
