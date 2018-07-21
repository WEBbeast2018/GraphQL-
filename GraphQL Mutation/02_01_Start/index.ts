import  express from 'express';
import  graphqlHTTP from 'express-graphql';
import  gqlSchema from './schema.ts';
import  resolvers from './resolvers.ts';

const app = express();

app.get('/', (req, res) => {

    res.send("Server response")
})


const schema  = gqlSchema;
const root = resolvers.resolvers;


app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue : root,
    graphiql : true
}));


app.listen(8080, () => console.log ('Running server on port 8080'))