import { useParams } from 'react-router-dom'
import { Search as SearchQuery } from '../../query/Search.query'
import ProductList from '../../component/ProductList/ProductList.component'
import FilterList from '../../component/FilterList/FilterList.component'

export function Search() {
    const { search: searchParam } = useParams()
    const search = SearchQuery({
        search: searchParam
    })

    if (!search) {
        return null
    }

    return (
        <div>
            <FilterList search={ search } />
            <ProductList search={ search } />
        </div>
    )
}

export default Search
