import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Search } from '../../query/Search.query'
import ProductList from '../../component/ProductList/ProductList.component'
import FilterList from '../../component/FilterList/FilterList.component'
import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    }
}))

export function Category() {
    const { urlKey } = useParams()
    const classes = useStyles();
    const search = Search({
        categoryUrlKey: urlKey
    })

    if (!search) {
        return null
    }

    const { category: { content } } = search

    return (
        <div className={ classes.root }>
            { parse(content) }
            <Grid container spacing={ 3 }>
                <Grid item xs={ 2 }>
                     <FilterList search={ search } />
                </Grid>
                <Grid item xs={ 10 }>
                    <ProductList search={ search } />
                </Grid>
            </Grid>
        </div>
    )
}

export default Category
