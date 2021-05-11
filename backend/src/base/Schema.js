import { generateTypeDef } from './TypeDef'
import { generateResolver } from './Resolver'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { productResolver} from '../resolver/Product.resolver'
import { productTypeDef } from '../type-def/Product.type-def'

export function buildSchema(models) {
    const typeDefs = [
        ...Object.values(models).map(generateTypeDef),
    ]
    const resolvers = [
        ...Object.values(models).map(generateResolver),
    ]

    return makeExecutableSchema({
        typeDefs: mergeTypeDefs(typeDefs),
        resolvers: mergeResolvers(resolvers)
    })
}

export default buildSchema
