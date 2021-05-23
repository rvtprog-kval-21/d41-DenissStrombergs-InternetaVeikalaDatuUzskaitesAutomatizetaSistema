import { gql, useQuery } from '@apollo/client'

export const GET_ALL_CUSTOMER_REVIEWS = gql`
    query GetAllCustomerReviews($customerId: ID!) {
        reviews: allReviews(filter: { customer_id: $customerId }) {
            id
            status
            date
            title
            content
            rating
            product: Product {
                id
                urlKey
                name
            }
        }
    }
`

export const GET_ALL_PRODUCT_REVIEWS = gql`
    query GetAllProductReviews($productId: ID!) {
        reviews: allReviews(filter: { product_id: $productId }) {
            id
            status
            date
            title
            content
            rating
            customer: Customer {
                id
                firstName
                lastName
            }
        }
    }
`

export const CREATE_REVIEW = gql`
    mutation CreateReview(
        $title: String!,
        $content: String!,
        $rating: Int!,
        $customerId: ID!,
        $productId: ID!
    ) {
        review: createReview(
            title: $title,
            content: $content,
            rating: $rating,
            customer_id: $customerId,
            product_id: $productId
        ) {
            id
            status
            date
            title
            content
            rating
            customerId: customer_id
            productId: product_id
        }
    }
`

export const UPDATE_REVIEW = gql`
    mutation UpdateReview(
        $id: ID!,
        $title: String!,
        $content: String!,
        $rating: Int!
    ) {
        review: updateReview(
            id: $id,
            title: $title,
            content: $content,
            rating: $rating
        ) {
            id
            status
            date
            title
            content
            rating
            customerId: customer_id
            productId: product_id
        }
    }
`

export const DELETE_REVIEW = gql`
    mutation DeleteReview($id: ID!) {
        deleteReview(id: $id) {
            id
        }
    }
`

export function GetAllCustomerReviews(variables) {
    const { loading, error, data: { reviews } = {} } = useQuery(GET_ALL_CUSTOMER_REVIEWS, { variables })

    if (loading || error) {
        return null
    }

    return reviews
}

export function GetAllProductReviews(variables) {
    const { loading, error, data: { reviews } = {} } = useQuery(GET_ALL_PRODUCT_REVIEWS, { variables })

    if (loading || error) {
        return null
    }

    return reviews
}

export function createReview(client, variables) {
    return client.mutate({
        mutation: CREATE_REVIEW,
        variables
    }).then(({ data }) => data?.review)
}

export function updateReview(client, variables) {
    return client.mutate({
        mutation: UPDATE_REVIEW,
        variables
    }).then(({ data }) => data?.review)
}

export function deleteReview(client, variables) {
    return client.mutate({
        mutation: UPDATE_REVIEW,
        variables
    }).then(({ data }) => data)
}
