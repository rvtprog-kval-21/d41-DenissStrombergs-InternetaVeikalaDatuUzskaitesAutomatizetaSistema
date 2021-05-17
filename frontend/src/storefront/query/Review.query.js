export const GET_ALL_CUSTOMER_REVIEWS = `
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

export const GET_ALL_PRODUCT_REVIEWS = `
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

export const CREATE_REVIEW = `
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

export const UPDATE_REVIEW = `
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

export const DELETE_REVIEW = `
    mutation DeleteReview($id: ID!) {
        deleteReview(id: $id) {
            id
        }
    }
`

export function GetAllCustomerReviews() {

}

export function GetAllProductReviews() {

}

export function CreateReview() {

}

export function UpdateReview() {

}

export function DeleteReview() {

}
