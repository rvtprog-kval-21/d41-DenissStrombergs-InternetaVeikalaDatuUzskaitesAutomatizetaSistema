import { gql, useQuery } from '@apollo/client'

export const GET_ALL_CUSTOMER_REVIEWS = gql`
    query GetAllCustomerReviews($customerId: ID!) {
        allReviews(filter: { customer_id: $customerId }) {
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
        allReviews(filter: { product_id: $productId }) {
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
        createReview(
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
        updateReview(
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
    const { loading, error, data } = useQuery(GET_ALL_CUSTOMER_REVIEWS, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function GetAllProductReviews(variables) {
    const { loading, error, data } = useQuery(GET_ALL_PRODUCT_REVIEWS, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function CreateReview(variables) {
    const { loading, error, data } = useQuery(CREATE_REVIEW, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function UpdateReview(variables) {
    const { loading, error, data } = useQuery(UPDATE_REVIEW, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function DeleteReview(variables) {
    const { loading, error, data } = useQuery(DELETE_REVIEW, { variables })

    if (loading || error) {
        return null
    }

    return data
}
