import { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
import { Admin as ReactAdmin, Resource } from "react-admin"
import buildGraphQLProvider from 'ra-data-graphql-simple'
import Dashboard from '../admin/component/Dashboard/Dashboard.component'
import CategoryResource from '../admin/component/Category/CategoryResource.component'
import AttributeResource from '../admin/component/Attribute/AttributeResource.component'
import AttributeSetResource from '../admin/component/AttributeSet/AttributeSetResource.component'
import BlockResource from '../admin/component/Block/BlockResource.component'
import PageResource from '../admin/component/Page/PageResource.component'
import ProductResource from '../admin/component/Product/ProductResource.component'
import ReviewResource from '../admin/component/Review/ReviewResource.component'
import Layout from '../admin/component/Layout/Layout.component'
import InvoiceResource from '../admin/component/Invoice/InvoiceResource.component'
import OrderResource from '../admin/component/Order/OrderResource.component'
import CustomerResource from '../admin/component/Customer/CustomerResource.component'

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
            dashboard={ Dashboard }
            layout={ Layout }
        >
            <Resource { ...AttributeResource } />
            <Resource { ...AttributeSetResource } />
            <Resource { ...BlockResource } />
            <Resource { ...CategoryResource } />
            <Resource { ...InvoiceResource } />
            <Resource { ...OrderResource } />
            <Resource { ...CustomerResource } />
            <Resource { ...PageResource } />
            <Resource { ...ProductResource } />
            <Resource { ...ReviewResource } />
        </ReactAdmin>
    )
}

export default Admin
