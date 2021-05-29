import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import Database from './base/Database'
import buildSchema from './base/Schema'

const database = new Database()
const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP(async (req) => {
    const role = req.header('Role') || 'PUBLIC'
    const token = req.header('Authentication') || ''

    return {
        schema: buildSchema(database.models),
        context: {
            models: database.models,
            sequelize: database.sequelize,
            role,
            token
        },
        graphiql: true
    }
}))
app.listen(3001)

/*
import { writeFileSync } from 'fs'
import sequelizeErd from 'sequelize-erd'

(async function(){
     const svg = await sequelizeErd({ source: database.sequelize, engine: 'dot' })
    writeFileSync('../documentation/schema.svg', svg)
})()
*/
