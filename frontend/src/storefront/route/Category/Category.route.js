import { useParams } from 'react-router-dom'
import queryString from 'query-string'
import Pagination from '@material-ui/lab/Pagination'
import { GetCategory } from '../../query/Category.query'
import { PAGE_SIZE } from './Category.config'
import ProductList from '../../component/ProductList/ProductList.component'
import FilterList from '../../component/FilterList/FilterList.component'

export function Category() {
    const { urlKey } = useParams()
    const search = queryString.parse(window.location.search)
    const category = GetCategory({ urlKey })

    if (!category) {
        return null
    }

    return (
        <div className="Category">
            <FilterList category={ category } />
            <ProductList category={ category } />
            <Pagination count={ Math.ceil(category?.product_count / PAGE_SIZE) } />
        </div>
    )
}

export default Category
