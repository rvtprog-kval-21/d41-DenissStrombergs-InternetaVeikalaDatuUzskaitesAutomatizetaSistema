import { gql, useQuery } from '@apollo/client'

export const SEARCH = gql`
    query Search($priceMin: Float!, $priceMax: Float!, attributeValues: AttributeValues!) {
        search(filter: { price_min:  }) {
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

export function Search(variables) {
    const { loading, error, data } = useQuery(SEARCH, { variables })

    if (loading || error) {
        return null
    }

    return data
}
