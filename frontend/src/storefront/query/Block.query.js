import { gql, useQuery } from '@apollo/client'

export const BLOCK = gql`
    query GetBlock($code: String!) {
        allBlocks(filter: { code: $code }) {
            id
            code,
            content
        }
    }
`

export function GetBlock({ code }) {
    const { loading, error, data: { allBlocks: [block] = [] } = {} } = useQuery(BLOCK, { variables: { code } })

    if (loading || error) {
        return null
    }

    return block
}

export default GetBlock
