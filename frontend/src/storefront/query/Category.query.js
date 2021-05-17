import { gql, useQuery } from '@apollo/client'

export const CATEGORIES = gql`
    query GetCategories {
        allCategories(filter: { isInMenu: true }) {
            id,
            isEnabled,
            name,
            urlKey,
            productCount,
            isInMenu,
            categoryId: category_id
        }
    }
`

export const CATEGORY = gql`
    query GetCategory($urlKey: String!) {
        allCategories(filter: { urlKey: $urlKey }) {
            id,
            isEnabled,
            name,
            urlKey,
            productCount,
            products: Products {
                id,
                isEnabled,
                name,
                sku,
                price,
                shortDescription,
                urlKey
            }
        }
    }
`

export function GetCategories() {
    const { data: { allCategories: categories } = {} } = useQuery(CATEGORIES, {})

    if (!categories) {
        return null
    }

    return categories
}

export function GetCategory({ urlKey }) {
    const { data: { allCategories: [category] = [] } = {} } = useQuery(CATEGORY, {
        variables: { urlKey }
    })
 

    if (!category) {
        return null
    }

    return category
}

export default GetCategory
