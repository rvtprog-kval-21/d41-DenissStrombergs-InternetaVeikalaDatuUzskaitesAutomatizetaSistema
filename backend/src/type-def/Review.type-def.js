export const reviewTypeDef = `
    type Query {
        customerReview(id: ID!) : Review
        allCustomerReviews : [Review]
    }

    type Mutation {
        createCustomerReview(
            status: String,
            date: Date,
            title: String!,
            content: String!,
            rating: Int!,
            customer_id: ID!,
            product_id: ID!
        ) : Review
        updateCustomerReview(
            id: ID!,
            status: String,
            date: Date,
            title: String!,
            content: String!,
            rating: Int!,
            customer_id: ID!,
            product_id: ID!
        ) : Review
        deleteCustomerReview(id: ID!) : Review
    }
`

export default reviewTypeDef
