export const searchTypeDef = `
    type Search {
        Category: Category
        Products: [Product]
        Attributes: [Attribute]
    }

    input SearchFilter {
        query: String
    }

    type Mutation {
        search(filter: SearchFilter!) : [Search]
    }
`

export default searchTypeDef
