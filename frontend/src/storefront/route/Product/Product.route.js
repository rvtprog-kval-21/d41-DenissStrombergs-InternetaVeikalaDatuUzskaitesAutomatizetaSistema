import { useParams } from 'react-router-dom'
import ProductGallery from '../../component/ProductGallery/ProductGallery.component'
import GetProduct from '../../query/Product.query'
import ProductActions from '../../component/ProductActions/ProductActions.component'
import ProductTabs from '../../component/ProductTabs/ProductTabs.component'

export function Product() {
    const { urlKey } = useParams()
    const product = GetProduct({ urlKey })

    if (!product) {
        return null
    }

    return (
        <div>
            <div>
                <ProductGallery product={ product } />
                <ProductActions product={ product } />
            </div>
            <ProductTabs product={ product } />
        </div>
    )
}

export default Product
