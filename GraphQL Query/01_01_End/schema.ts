const graphql = require('graphql');

const  schema =  graphql.buildSchema(
    'type Query { sayHello : String}');

module.exports = schema;