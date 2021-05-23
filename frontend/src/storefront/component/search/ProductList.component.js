import { Grid, makeStyles, Typography } from '@material-ui/core'
import ProductItem from './ProductItem.component'
import FilterList from './FilterList.component'
import Pagination from './Pagination.component'
import Sort from './Sort.component'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Search } from '../../query/Search.query'
import { CONFIG } from '../../../base/Config'
import queryString from 'query-string'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}))

export function ProductList(props) {
    const classes = useStyles()
    const { urlKey, query = '' } = useParams()
    const { page = 1, sort } = queryString.parse(window.location.search)
    const search = Search({
        categoryUrlKey: urlKey,
        search: query,
        perPage: CONFIG.SEARCH.PER_PAGE,
        sort,
        page: parseInt(page)
    })

    if (!search) {
        return null
    }

    const { products, category } = search
    const { content } = category || {}

    const renderProductItem = (product) => {
        return (
            <ProductItem product={ product } />
        )
    }

    const renderNoProducts = () => {
        return (
            <Grid item xs={ 12 }>
                <Typography>
                    No products found
                </Typography>
            </Grid>
        )
    }

    const renderProducts = () => {
        return (
            <>
                <Grid item xs={ 2 }>
                    <FilterList search={ search } />
                </Grid>
                <Grid item xs={ 10 }>
                    <Sort />
                    <Grid
                        container
                        direction="row"
                        justify="start"
                        alignItems="center"
                        spacing={ 4 }
                    >
                        { products.map(renderProductItem)  }
                    </Grid>
                    <Pagination page={ page } search={ search } />
                </Grid>
            </>
        )
    }

    return (
        <div className={ classes.root }>
            { content ? parse(content) : null }
            <Grid container spacing={ 3 }>
                { products.length ? renderProducts() : renderNoProducts() }
            </Grid>
        </div>
    )
}

export default ProductList
