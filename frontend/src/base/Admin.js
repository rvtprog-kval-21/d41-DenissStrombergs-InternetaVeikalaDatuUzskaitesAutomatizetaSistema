import { useState, useEffect } from 'react'
import { createBrowserHistory } from 'history'
import { Admin as ReactAdmin, Resource } from "react-admin"
import buildGraphQLProvider from 'ra-data-graphql-simple'
import { AttributeCreate, AttributeEdit, AttributeList } from "../admin/resource/Attribute.resource"
import { AttributeSetCreate, AttributeSetEdit, AttributeSetList } from "../admin/resource/AttributeSet.resource"
import { CategoryCreate, CategoryEdit, CategoryList } from "../admin/resource/Category.resource"
import { ProductCreate, ProductEdit, ProductList } from "../admin/resource/Product.resource"
import { ProductReviewCreate, ProductReviewEdit, ProductReviewList } from "../admin/resource/ProductReview.resource"
import { BlockCreate, BlockEdit, BlockList } from '../admin/resource/Block.resource'
import { PageCreate, PageEdit, PageList } from '../admin/resource/Page.resource'
import Dashboard from '../admin/component/Dashboard.component'

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
        <ReactAdmin dataProvider={ dataProvider } history={ createBrowserHistory({ basename: 'admin' }) } dashboard={ Dashboard }>
            <Resource name="Attribute" list={ AttributeList } create={ AttributeCreate } edit={ AttributeEdit }/>
            <Resource name="AttributeSet" options={ { label: 'Attribute sets' } } list={ AttributeSetList } create={ AttributeSetCreate } edit={ AttributeSetEdit }/>
            <Resource name="Block" list={ BlockList } create={ BlockCreate } edit={ BlockEdit }/>
            <Resource name="Category" list={ CategoryList } create={ CategoryCreate } edit={ CategoryEdit }/>
            <Resource name="Page" list={ PageList } create={ PageCreate } edit={ PageEdit }/>
            <Resource name="Product" list={ ProductList } create={ ProductCreate } edit={ ProductEdit }/>
            <Resource name="ProductReview" options={ { label: 'Product reviews' } } list={ ProductReviewList } create={ ProductReviewCreate } edit={ ProductReviewEdit }/>
        </ReactAdmin>
    )
}

export default Admin
