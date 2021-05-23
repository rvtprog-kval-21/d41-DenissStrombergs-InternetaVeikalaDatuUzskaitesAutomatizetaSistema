import { gql, useQuery } from '@apollo/client'

export const GET_ALL_ADDRESSES = gql`
    query GetAllAddresses($customerId: ID!) {
        addresses: allAddresses(filter: { customer_id: $customerId }) {
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

export const GET_ADDRESS = gql`
    query GetAddress($id: ID!) {
        address: Address(id: $id) {
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
        address: createAddress(
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
        address: updateAddress(
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
    const { loading, error, data: { addresses } = {} } = useQuery(GET_ALL_ADDRESSES, { variables })

    if (loading || error) {
        return null
    }

    return addresses
}

export function GetAddress(variables) {
    const { loading, error, data: { address } = {} } = useQuery(GET_ADDRESS, { variables })

    if (loading || error) {
        return null
    }

    return address
}

export function CreateAddress(client, variables) {
    return client.mutate({
        mutation: CREATE_ADDRESS,
        variables
    }).then(({ data }) => data?.address)
}

export function UpdateAddress(client, variables) {
    return client.mutate({
        mutation: UPDATE_ADDRESS,
        variables
    }).then(({ data }) => data?.address)
}

export function DeleteAddress(client, variables) {
    return client.mutate({
        mutation: DELETE_ADDRESS,
        variables
    }).then(({ data }) => data)
}
