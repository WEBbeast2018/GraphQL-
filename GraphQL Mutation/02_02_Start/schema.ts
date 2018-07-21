const graphql = require('graphql');


// TODO
// Add mutation to update user data

const schema =  graphql.buildSchema(
    `
    type User {
        id: ID!
        name: String
    }
    
    type Query
    {
        getUsers : [User]
        getUser(id: ID!) : User
    }
    
    type Mutation {
        addUser(id: ID!, name: String!): User
       
    `
);


module.exports = schema;