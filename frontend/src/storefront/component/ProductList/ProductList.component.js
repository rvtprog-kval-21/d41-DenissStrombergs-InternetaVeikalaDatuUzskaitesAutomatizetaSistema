import { Grid } from '@material-ui/core'
import ProductItem from '../ProductItem/ProductItem.component'

export function renderProductItem(product) {
    return (
        <ProductItem product={ product } />
    )
}

export function ProductList(props) {
    const { search: { products = [] } = {} } = props

    return (
        <div className="ProductList">
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
