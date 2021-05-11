import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import Database from './base/Database'
import buildSchema from './base/Schema'

const database = new Database()
const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
    schema: buildSchema(database.models),
    context: {
        models: database.models
    },
    graphiql: true
}))
app.listen(3001)
