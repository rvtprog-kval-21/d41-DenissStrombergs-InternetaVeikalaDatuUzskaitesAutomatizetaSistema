import { useParams } from 'react-router-dom'
import {Page as PageComponent } from '../../component/Page/Page.component'

export function Page() {
    const { urlKey } = useParams()

    return (
        <PageComponent urlKey={ urlKey } />
    )
}

export default Page
