import { gql, useQuery } from '@apollo/client'

export const GET_PRODUCT = gql`
    query Product($urlKey: String!) {
        product: ProductByUrlKey(urlKey: $urlKey) {
            id
            sku
            name
            price
            stockQuantity
            specialDiscountType
            specialDiscountValue
            specialTaxRate
            shortDescription
            longDescription
            media
            attributeValues
            attributeSet: AttributeSet {
                attributes: Attributes {
                    id
                    code
                    label
                    type
                    attributeOptions
                    attributeGroup
                }
            }
        }
    }
`

export function GetProduct(variables) {
    const { data: { product } = {} } = useQuery(GET_PRODUCT, { variables })

    if (!product) {
        return null
    }

    return product
}

export default GetProduct
