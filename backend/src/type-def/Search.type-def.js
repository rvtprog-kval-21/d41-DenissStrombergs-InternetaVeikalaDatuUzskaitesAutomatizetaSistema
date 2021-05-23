export const searchTypeDef = `
    scalar FilterValues

    type Aggregations {
        count: Int
        minPrice: Float
        maxPrice: Float
        filterValues: FilterValues
    }

    type Search {
        Category: Category
        Products: [Product]
        Attributes: [Attribute]
        Aggregations: Aggregations
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
