import { gql, useQuery } from '@apollo/client'

export const GET_ALL_ADDRESSES = gql`
    query GetAllAddresses($customerId: ID!) {
        allAddresses(filter: { customer_id: $customerId }) {
            id
            firstName
            lastName
            phoneNumber
            country
            city
            province
            street1
            street2
            postalCode
        }
    }
`

export const CREATE_ADDRESS = gql`
    mutation CreateAddress(
        $firstName: String!,
        $lastName: String!,
        $phoneNumber: String!,
        $country: String!,
        $city: String!,
        $province: String!,
        $street1: String!,
        $street2: String!,
        $postalCode: String!,
        $customerId: ID!
    ) {
        createAddress(
            firstName: $firstName,
            lastName: $lastName,
            phoneNumber: $phoneNumber,
            country: $country,
            city: $city,
            province: $province,
            street1: $street1,
            street2: $street2,
            postalCode: $postalCode,
            customer_id: $customerId
        ) {
            id
            firstName
            lastName
            phoneNumber
            country
            city
            province
            street1
            street2
            postalCode
        }
    }
`

export const UPDATE_ADDRESS = gql`
    mutation UpdateAddress(
        $id: ID!,
        $firstName: String!,
        $lastName: String!,
        $phoneNumber: String!,
        $country: String!,
        $city: String!,
        $province: String!,
        $street1: String!,
        $street2: String!,
        $postalCode: String!,
        $customerId: ID!
    ) {
        updateAddress(
            id: $id,
            firstName: $firstName,
            lastName: $lastName,
            phoneNumber: $phoneNumber,
            country: $country,
            city: $city,
            province: $province,
            street1: $street1,
            street2: $street2,
            postalCode: $postalCode,
            customer_id: $customerId
        ) {
            id
            firstName
            lastName
            phoneNumber
            country
            city
            province
            street1
            street2
            postalCode
        }
    }
`

export const DELETE_ADDRESS = gql`
    mutation DeleteAddress($id: ID!) {
        deleteAddress(id: $id) {
            id
        }
    }
`

export function GetAllAddresses(variables) {
    const { loading, error, data } = useQuery(GET_ALL_ADDRESSES, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function CreateAddress(variables) {
    const { loading, error, data } = useQuery(CREATE_ADDRESS, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function UpdateAddress(variables) {
    const { loading, error, data } = useQuery(UPDATE_ADDRESS, { variables })

    if (loading || error) {
        return null
    }

    return data
}

export function DeleteAddress(variables) {
    const { loading, error, data } = useQuery(DELETE_ADDRESS, { variables })

    if (loading || error) {
        return null
    }

    return data
}
