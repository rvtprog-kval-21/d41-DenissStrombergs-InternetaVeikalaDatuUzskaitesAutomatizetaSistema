import { Grid, makeStyles } from '@material-ui/core'
import ProductItem from '../ProductItem/ProductItem.component'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}))

export function ProductList(props) {
    const classes = useStyles();
    const { search: { products = [] } = {} } = props

    const renderProductItem = (product) => {
        return (
            <ProductItem product={ product } />
        )
    }

    return (
        <div className={ classes.root }>
            <Grid
              container
              direction="row"
              justify="start"
              alignItems="center"
              spacing={ 4 }
            >
                { products.map(renderProductItem) }
            </Grid>
        </div>
    )
}

export default ProductList
