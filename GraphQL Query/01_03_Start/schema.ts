const graphql = require('graphql');

// TODO
//  Add query to get single user

const  schema =  graphql.buildSchema(
    'type User {id: ID  name: String }'
;

module.exports = schema;