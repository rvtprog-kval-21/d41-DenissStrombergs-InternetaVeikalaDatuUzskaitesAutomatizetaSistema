import { gql, useQuery } from '@apollo/client'

export const PAGE = gql`
    query GetPage($urlKey: String!) {
        pages: allPages(filter: { urlKey: $urlKey }) {
            id
            urlKey,
            content
        }
    }
`

export function GetPage(variables) {
    const { loading, error, data: { pages: [page] = [] } = {} } = useQuery(PAGE, { variables })

    if (loading || error) {
        return null
    }

    return page
}

export default GetPage
