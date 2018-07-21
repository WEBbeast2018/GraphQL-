const graphql = require('graphql');

// TODO
// Add Mutation to create new user


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
    
    
    `
);


module.exports = schema;