const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  type PokemonSprites {
    front_default: String!
    front_shiny: String!
    front_female: String!
    front_shiny_female: String!
    back_default: String!
    back_shiny: String!
    back_female: String!
    back_shiny_female: String!
  }

  type Pokemon {
    id: ID!
    name: String!
    height: Int!
    weight: Int!
    sprites: PokemonSprites!
  }

  type Masterpiece {
    id: ID
    name: String
    chef_name: String
    chef_kecamatan: String
    chef_kota: String
    chef_alamat: String
    chef_avatar: String
    status: String
    description: String
    min_order: Int
    price: Int
    priceDiskon: Int
  }
  
  type ClusterCategory {
    id: ID
    title: String
    slug: String
    url_square_poster: String
    url_landscape_poster: String
    api_url: String
    status: Int
    sorting: Int
    has_children: Boolean
  }
  

  type Query {
    pokemon(id: ID!): Pokemon
    version: String
    clusterCategories: [ClusterCategory]
    masterpiece: [Masterpiece]
  }

`