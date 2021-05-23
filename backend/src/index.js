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
        models: database.models,
        sequelize: database.sequelize
    },
    graphiql: true
}))
app.listen(3001)

import { writeFileSync } from 'fs'
import sequelizeErd from 'sequelize-erd'

(async function(){
     const svg = await sequelizeErd({ source: database.sequelize, engine: 'dot' })
    writeFileSync('../documentation/erd.svg', svg)
})()
