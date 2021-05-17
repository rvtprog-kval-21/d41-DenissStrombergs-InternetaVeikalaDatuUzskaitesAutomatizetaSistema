import { Provider } from 'react-redux'
import configureStore from './Store'
import Admin from './Admin'
import Homepage from '../storefront/route/Homepage/Homepage.route'
import Error from '../storefront/route/Error/Error.route'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from '../storefront/component/Footer/Footer.component'
import Header from '../storefront/component/Header/Header.component'
import Account from '../storefront/route/Account/Account.route'
import Cart from '../storefront/route/Cart/Cart.route'
import Category from '../storefront/route/Category/Category.route'
import Checkout from '../storefront/route/Checkout/Checkout.route'
import Page from '../storefront/route/Page/Page.route'
import Product from '../storefront/route/Product/Product.route'
import Search from '../storefront/route/Search/Search.route'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

const store = configureStore()

const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache()
})

export function Router() {

    const renderStorefront = () => {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path="/" render={ () => (<Homepage/>) } exact/>
                    <Route path="/checkout" render={ () => (<Checkout/>) } exact/>
                    <Route path="/account" render={ () => (<Account/>) } exact/>
                    <Route path="/cart" render={ () => (<Cart/>) } exact/>
                    <Route path="/category/:urlKey" render={ () => (<Category/>) }/>
                    <Route path="/page/:urlKey" render={ () => (<Page/>) }/>
                    <Route path="/product/:urlKey" render={ () => (<Product/>) }/>
                    <Route path="/search/:query" render={ () => (<Search/>) }/>
                    <Route render={ () => (<Error/>) }/>
                </Switch>
                <Footer/>
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
