import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { useCallback } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 128,
        width: 128,
    },
    area: {
        display: 'flex'
    }
})

export function CartItem(props) {
    const { product: { product: { name, url_key }, product, quantity } } = props
    const classes = useStyles();
    const history = useHistory()
    const dispatch = useDispatch()

    const onProductClick = () => {
        history.push(`/product/${ url_key }`)
    }

    const onAddButtonClick = () => {
        console.log(product)
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            payload: { product }
        })
    }

    const onRemoveButtonClick = () => {
        dispatch({
            type: 'REMOVE_PRODUCT_FROM_CART',
            payload: { product }
        })
    }

    const onDeleteButtonClick = () => {
        dispatch({
            type: 'DELETE_PRODUCT_FROM_CART',
            payload: { product }
        })
    }

    return (
        <Grid item>
            <Card className={ classes.root }>
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
                        </CardContent>
                    </div>
                </CardActionArea>
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
            </Card>
        </Grid>
    )
}

export default CartItem
