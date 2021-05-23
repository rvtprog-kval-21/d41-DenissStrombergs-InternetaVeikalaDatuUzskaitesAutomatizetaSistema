import { Provider } from 'react-redux'
import configureStore from './Store'
import Admin from './Admin'
import Homepage from '../storefront/route/Homepage.route'
import Error from '../storefront/route/Error.route'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from '../storefront/component/other/Footer.component'
import Header from '../storefront/component/other/Header.component'
import Account from '../storefront/route/Account.route'
import Cart from '../storefront/route/Cart.route'
import Category from '../storefront/route/Category.route'
import Checkout from '../storefront/route/Checkout.route'
import Page from '../storefront/route/Page.route'
import Product from '../storefront/route/Product.route'
import Search from '../storefront/route/Search.route'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const store = configureStore()

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
})

export function Router() {
    const renderContent = () => {
        return (
            <>
                <Switch>
                    <Route path="/" render={ () => (<Homepage/>) } exact/>
                    <Route path="/checkout" render={ () => (<Checkout/>) } exact/>
                    <Route path="/account" render={ () => (<Account/>) } exact />
                    <Route path="/account/:section?/:action?/:id?" render={ () => (<Account/>) } />
                    <Route path="/cart" render={ () => (<Cart/>) } exact/>
                    <Route path="/category/:urlKey" render={ () => (<Category/>) }/>
                    <Route path="/page/:urlKey" render={ () => (<Page/>) }/>
                    <Route path="/product/:urlKey" render={ () => (<Product/>) }/>
                    <Route path="/search/:search" render={ () => (<Search/>) }/>
                    <Route render={ () => (<Error/>) }/>
                </Switch>
                <Footer/>
            </>
        )
    }

    const renderStorefront = () => {
        return (
            <>
                <Header content={ renderContent } />
            </>
        )
    }

    return (
        <BrowserRouter>
            <Provider store={ store }>
                <ApolloProvider client={ client }>
                    { window.location.pathname.includes('admin') ? null : renderStorefront() }
                </ApolloProvider>
            </Provider>
            <Route path="/admin" render={ () => (<Admin/>) }/>
        </BrowserRouter>
    )
}

export default Router
