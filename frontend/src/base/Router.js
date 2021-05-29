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
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import Notification from '../storefront/component/other/Notification.component'
import { setContext } from '@apollo/client/link/context'

const store = configureStore()

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
})

const authLink = setContext((_, { headers }) => {
    const account = JSON.parse(localStorage.getItem('ACCOUNT')) || {}
    const { token } = account

    return {
        headers: {
            ...headers,
            role: token ? 'CLIENT' : 'PUBLIC',
            authentication: token ? token : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
                <Notification />
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
