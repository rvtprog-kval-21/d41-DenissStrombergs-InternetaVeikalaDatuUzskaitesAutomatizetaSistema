import { gql, useQuery } from '@apollo/client'

export const GET_ALL_CATEGORIES = gql`
    query GetAllCategories {
        allCategories(filter: { isEnabled: true, isInMenu: true }) {
            id
            isEnabled
            name
            urlKey
            isInMenu
            categoryId: category_id
        }
    }
`

export function GetAllCategories() {
    const { data: { allCategories: categories } = {} } = useQuery(GET_ALL_CATEGORIES, {})

    if (!categories) {
        return null
    }

    return categories
}
