import { gql, useQuery } from '@apollo/client'

export const PRODUCT = gql`
    query Product($urlKey: String!) {
        allProducts(filter: { urlKey: $urlKey }) {
            id,
            isEnabled,
            name,
            sku,
            price,
            shortDescription,
            urlKey,
            type,
            longDescription
        }
    }
`

export function GetProduct({ urlKey }) {
    const { data: { allProducts: [product] = [] } = {} } = useQuery(PRODUCT, {
        variables: { urlKey }
    })


    if (!product) {
        return null
    }

    return product
}

export default GetProduct
