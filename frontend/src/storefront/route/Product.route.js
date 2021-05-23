import { useParams } from 'react-router-dom'
import ProductGallery from '../component/product/ProductGallery.component'
import GetProduct from '../query/Product.query'
import ProductActions from '../component/product/ProductActions.component'
import ProductTabs from '../component/product/ProductTabs.component'

export function Product() {
    const { urlKey } = useParams()
    const product = GetProduct({ urlKey })

    if (!product) {
        return null
    }

    return (
        <div>
            <div>
                <ProductActions product={ product } />
            </div>
            <ProductTabs product={ product } />
        </div>
    )
}

export default Product

// <ProductGallery product={ product } />
