import  express from 'express';
import  graphqlHTTP from 'express-graphql';

// TODD
// --- Import schema
// --- Import resolver
// --- Bind schema & resolver


const app = express();

app.get('/', (req, res) => {

    res.send("Server response")
})

const root = resolvers.resolvers;
const schema  = gqlSchema;

app.use('/graphql', graphqlHTTP({
    schema: '',
    rootValue : '',
    graphiql : true
}));


app.listen(8080, () => console.log ('Running server on port 8080'))