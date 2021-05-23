import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@material-ui/core'
import { AddProduct } from '../../query/Cart.query'
import { useApolloClient } from '@apollo/client'
import Price from './Price.component'

export function ProductActions(props) {
    const client = useApolloClient()
    const account = useSelector((state) => state.AccountReducer)
    const { product, product: { name, sku, price} } = props
    const dispatch = useDispatch()

    const onAddToCart = async () => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: {
                cartItem: await AddProduct(client, {
                    customerId: account.id,
                    productId: product.id,
                    quantity: 1
                })
            }
        })
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
            <Button onClick={ onAddToCart } variant="contained" color="primary">
                Add to cart
            </Button>
        </div>
    )
}

export default ProductActions
