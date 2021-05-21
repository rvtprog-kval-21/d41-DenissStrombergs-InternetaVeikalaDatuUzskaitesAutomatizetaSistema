export const searchTypeDef = `
    type Search {
        Category: Category
        Products: [Product]
        Attributes: [Attribute]
    }

    input AttributeValue {
        code: String!
        value: String!
    }

    type Query {
        search(
            category_id: ID
            search: String
            priceMin: Float
            priceMax: Float
            attributeValues: [AttributeValue]
            page: Int
            perPage: Int
            sortField: String
            sortOrder: String
        ) : Search
    }
`

export default searchTypeDef
