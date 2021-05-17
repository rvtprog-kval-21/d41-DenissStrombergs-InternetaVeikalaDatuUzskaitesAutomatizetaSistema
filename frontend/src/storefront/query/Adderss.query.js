export const GET_ALL_ADDRESSES = `
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

export const CREATE_ADDRESS = `
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

export const UPDATE_ADDRESS = `
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

export const DELETE_ADDRESS = `
    mutation DeleteAddress($id: ID!) {
        deleteAddress(id: $id) {
            id
        }
    }
`

export function GetAllAddresses() {

}

export function CreateAddress() {

}

export function UpdateAddress() {

}

export function DeleteAddress() {

}
