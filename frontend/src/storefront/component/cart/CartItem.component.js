import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import DeleteIcon from '@material-ui/icons/Delete'
import { useApolloClient } from '@apollo/client'
import { AddProduct, RemoveProduct } from '../../query/Cart.query'
import Price from '../product/Price.component'

const useStyles = makeStyles({
    media: {
        height: 128,
        width: 128,
    },
    area: {
        display: 'flex',
        justifyContent: 'flex-start'
    }
})

export function CartItem(props) {
    const { cartItem: { product: { name, urlKey, price }, product, quantity }, shouldRenderCartItemActions = true } = props
    const client = useApolloClient()
    const account = useSelector((state) => state.AccountReducer)
    const classes = useStyles()
    const history = useHistory()
    const dispatch = useDispatch()

    const onProductClick = () => {
        history.push(`/product/${ urlKey }`)
    }

    const onAddButtonClick = async () => {
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

    const onRemoveButtonClick = async () => {
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            payload: {
                cartItem: await RemoveProduct(client, {
                    customerId: account.id,
                    productId: product.id,
                    quantity: 1
                })
            }
        })
    }

    const onDeleteButtonClick = async () => {
        dispatch({
            type: 'DELETE_PRODUCT_FROM_CART',
            payload: {
                cartItem: await RemoveProduct(client, {
                    customerId: account.id,
                    productId: product.id,
                    quantity
                })
            }
        })
    }

    const renderCartAction = () => {
        if (!shouldRenderCartItemActions) {
            return null
        }

        return (
            <CardActions>
                <IconButton onClick={ onAddButtonClick }>
                    <AddIcon />
                </IconButton>
                <Typography>
                    { quantity }
                </Typography>
                <IconButton onClick={ onRemoveButtonClick }>
                    <RemoveIcon />
                </IconButton>
                <IconButton onClick={ onDeleteButtonClick }>
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        )
    }

    return (
        <Grid item>
            <Card className={ classes.root } >
                <CardActionArea onClick={ onProductClick } className={ classes.area }>
                    <div>
                        <CardMedia
                            className={ classes.media }
                            image="https://via.placeholder.com/480x360"
                            title={ name }
                        />
                    </div>
                    <div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                { name }
                            </Typography>
                            <Typography gutterBottom variant="h5" component="h2">
                                <Price value={ price } />
                            </Typography>
                        </CardContent>
                    </div>
                </CardActionArea>
                { renderCartAction() }
            </Card>
        </Grid>
    )
}

export default CartItem
