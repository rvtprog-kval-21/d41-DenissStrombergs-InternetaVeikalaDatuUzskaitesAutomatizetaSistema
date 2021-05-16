import { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
import { Admin as ReactAdmin, Resource } from 'react-admin'
import buildGraphQLProvider from 'ra-data-graphql-simple'
import PageResource from '../admin/resource/Page/PageResource.component'
import BlockResource from '../admin/resource/Block/BlockResource.component'
import AttributeResource from '../admin/resource/Attribute/AttributeResource.component'
import AttributeSetAttributeResource from '../admin/resource/AttributeSetAttribute/AttributeSetAttributeResource.component'
import UserResource from '../admin/resource/User/UserResource.component'
import AttributeSetResource from '../admin/resource/AttributeSet/AttributeSetResource.component'
import ProductResource from '../admin/resource/Product/ProductResource.component'
import CustomerGroupResource from '../admin/resource/CustomerGroup/CustomerGroupResource.component'
import CustomerResource from '../admin/resource/Customer/CustomerResource.component'
import OrderItemResource from '../admin/resource/OrderItem/OrderItemResource.component'
import OrderResource from '../admin/resource/Order/OrderResource.component'

export function Admin() {
    const [dataProvider, setDataProvider] = useState(null)

    useEffect(() => {
        const onMount = async () => {
            const dataProvider = await buildGraphQLProvider({
                clientOptions: {
                    uri: 'http://localhost:3001/graphql'
                }
            })

            setDataProvider(() => dataProvider)
        }

        onMount()

        return () => {}
    }, [])

    if (!dataProvider) {
        return null
    }

    return (
        <ReactAdmin
            dataProvider={ dataProvider }
            history={ createBrowserHistory({ basename: 'admin' }) }
        >
            <Resource { ...UserResource } />
            <Resource { ...AttributeResource } />
            <Resource { ...AttributeSetResource } />
            <Resource { ...AttributeSetAttributeResource } />
            <Resource { ...BlockResource } />
            <Resource { ...PageResource } />
            <Resource { ...ProductResource } />
            <Resource { ...CustomerGroupResource } />
            <Resource { ...CustomerResource } />
            <Resource { ...OrderItemResource } />
            <Resource { ...OrderResource } />
        </ReactAdmin>
    )
}

export default Admin
