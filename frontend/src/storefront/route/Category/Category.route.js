import { useParams } from 'react-router-dom'
import parse from 'html-react-parser'
import { Search } from '../../query/Search.query'
import ProductList from '../../component/ProductList/ProductList.component'
import FilterList from '../../component/FilterList/FilterList.component'

export function Category() {
    const { urlKey } = useParams()
    const search = Search({
        categoryUrlKey: urlKey
    })

    if (!search) {
        return null
    }

    const { category: { content } } = search

    return (
        <div>
            { parse(content) }
            <FilterList search={ search } />
            <ProductList search={ search } />
        </div>
    )
}

export default Category
