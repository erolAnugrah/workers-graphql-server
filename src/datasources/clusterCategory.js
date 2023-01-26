const { RESTDataSource } = require('apollo-datasource-rest')

class ClusterCategoryAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://contents.visionplus.id/api/v1/contents/'
  }

  willSendRequest(request) {
    request.headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY0NTE4OTcsInVpZCI6MCwicGwiOiJ3ZWIiLCJndWVzdF90b2tlbiI6ImNhNGNjMjdiNzc3MjBjODEwNzQ2YzY3MTY4NzNjMDI3NGU4NWYxMWQifQ.tt08jLZ3HiNadUeSgc9O-nhIzEi7WMYRjxMb05lEZ74'
  }

  async getClusterCategories() {
    const data = await this.get(`clustercategories`,{},{
      headers:  { 
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY0NTE4OTcsInVpZCI6MCwicGwiOiJ3ZWIiLCJndWVzdF90b2tlbiI6ImNhNGNjMjdiNzc3MjBjODEwNzQ2YzY3MTY4NzNjMDI3NGU4NWYxMWQifQ.tt08jLZ3HiNadUeSgc9O-nhIzEi7WMYRjxMb05lEZ74'
      }
    })
    return data.data
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
    const data = await this.get('clustercategories',{},{
      headers:  { 
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY0NTE4OTcsInVpZCI6MCwicGwiOiJ3ZWIiLCJndWVzdF90b2tlbiI6ImNhNGNjMjdiNzc3MjBjODEwNzQ2YzY3MTY4NzNjMDI3NGU4NWYxMWQifQ.tt08jLZ3HiNadUeSgc9O-nhIzEi7WMYRjxMb05lEZ74'
      }
    });
    console.log(data)

    return data.data;
  }
}

module.exports = ClusterCategoryAPI
