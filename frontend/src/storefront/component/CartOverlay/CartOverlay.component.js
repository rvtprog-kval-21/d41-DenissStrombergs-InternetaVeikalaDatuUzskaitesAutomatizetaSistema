import React from 'react'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { useSelector } from 'react-redux'
import { CartItem } from '../CartItem/CartItem.component'
import { Button } from '@material-ui/core'
import CartList from '../CartList/CartList.component'

export function CartOverlay() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <IconButton { ...bindTrigger(popupState) } aria-label="cart" color="inherit">
                        <ShoppingCartIcon />
                    </IconButton>
                    <Popover
                        { ...bindPopover(popupState) }
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 0, left: window.innerWidth }}
                        marginThreshold={ 0 }
                        PaperProps={{ style: { width: '500px', height: '100%', maxHeight: 'none' } }}
                    >
                        <Typography>Cart</Typography>
                        <CartList />
                        <div>
                            <Button variant="contained" color="primary" href="/cart">Go to cart</Button>
                            <Button variant="contained" color="primary" href="/checkout">Go to checkout</Button>
                        </div>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default CartOverlay
