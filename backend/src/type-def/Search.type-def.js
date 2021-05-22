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
            categoryUrlKey: String
            search: String
            priceMin: Float
            priceMax: Float
            attributeValues: [AttributeValue]
            page: Int
            perPage: Int
            sort: String
        ) : Search
    }
`

export default searchTypeDef
