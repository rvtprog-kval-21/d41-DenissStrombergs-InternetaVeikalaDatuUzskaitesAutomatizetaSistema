import { useDispatch } from "react-redux"
import { Button, Typography } from "@material-ui/core"

export function ProductActions(props) {
    const { product, product: { name, sku, price} } = props
    const dispatch = useDispatch()

    const onAddToCart = () => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: { product }
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
                { `Price: ${price}$` }
            </Typography>
            <Button onClick={ onAddToCart } variant="contained" color="primary">
                Add to cart
            </Button>
        </div>
    )
}

export default ProductActions
