import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '../Menu/Menu.component'
import CartOverlay from '../CartOverlay/CartOverlay.component'
import SearchOverlay from '../SearchOverlay/SearchOverlay.component'
import AccountOverlay from '../AccountOverlay/AccountOverlay.component'
import { Link } from '@material-ui/core'

export function Header() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <Typography variant="h5">
                    <Link href="/" color="inherit">Storefront</Link>
                </Typography>
                <Menu/>
                <SearchOverlay />
                <CartOverlay />
                <AccountOverlay />
            </Toolbar>
        </AppBar>
    )
}

export default Header
