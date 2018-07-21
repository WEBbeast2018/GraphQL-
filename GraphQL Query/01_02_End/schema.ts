const graphql = require('graphql');

const  schema =  graphql.buildSchema(
    'type User {id: ID  name: String }' +
    'type Query { getUsers : [User]')
;

module.exports = schema;