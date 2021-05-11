import { gql, useQuery } from '@apollo/client'

export const PAGE = gql`
    query GetPage($urlKey: String!) {
        allPages(filter: { urlKey: $urlKey }) {
            id
            urlKey,
            content
        }
    }
`

export function GetPage({ urlKey }) {
    const { loading, error, data: { allPages: [page] = [] } = {} } = useQuery(PAGE, { variables: { urlKey } })

    if (loading || error) {
        return null
    }

    return page
}

export default GetPage
