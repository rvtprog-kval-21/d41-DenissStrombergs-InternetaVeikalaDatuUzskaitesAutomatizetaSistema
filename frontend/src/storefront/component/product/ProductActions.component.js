import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@material-ui/core'
import { useApolloClient } from '@apollo/client'
import Price from './Price.component'
import { addProductToCart } from '../../dispatcher/Cart.dispatcher'
import { showNotification } from '../../dispatcher/Notification.dispatcher'

export function ProductActions(props) {
    const dispatch = useDispatch()
    const client = useApolloClient()
    const account = useSelector((state) => state.AccountReducer)
    const { product: { id, name, sku, price} } = props

    const onAddToCartButtonClick = () => {
        if (account.token) {
            addProductToCart({ dispatch, client }, { productId: id, quantity: 1 })
        } else {
            showNotification({ dispatch }, { severity: 'INFO', message: 'Please sign in into your account to add a product to the cart.' })
        }
    }

    return (
        <div>
            <Typography>
                { `SKU: ${sku}` }
            </Typography>
            <Typography variant="h3">
                { name }
            </Typography>
            <Typography>
                { 'Price: ' }
                <Price value={ price } />
            </Typography>
            <Button onClick={ onAddToCartButtonClick } variant="contained" color="primary">
                Add to cart
            </Button>
        </div>
    )
}

export default ProductActions
