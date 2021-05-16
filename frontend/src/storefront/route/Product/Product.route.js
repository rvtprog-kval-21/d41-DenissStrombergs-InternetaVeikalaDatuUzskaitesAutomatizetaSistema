import { useParams } from 'react-router-dom'
import ProductGallery from '../../component/ProductGallery/ProductGallery.component'
import GetProduct from '../../query/Product.query'
import Tab from '@material-ui/core/Tab'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import { useState } from 'react'
import TabContext from '@material-ui/lab/TabContext'
import ProductDetails from '../../component/ProductDetails/ProductDetails.component'
import ProductReviews from '../../component/ProductReviews/ProductReviews.component'
import ProductActions from '../../component/ProductActions/ProductActions.component'

export function Product() {
    const { urlKey } = useParams()
    const product = GetProduct({ urlKey })
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    if (!product) {
        return null
    }

    return (
        <div>
            <div>
                <ProductGallery product={ product } />
                <ProductActions product={ product } />
            </div>
            <TabContext value={ value }>
                <TabList onChange={ handleChange } aria-label="tabs">
                    <Tab label="Details" value="1" />
                    <Tab label="Reviews" value="2" />
                </TabList>
                <TabPanel value="1">
                    <ProductDetails product={ product } />
                </TabPanel>
                <TabPanel value="2">
                    <ProductReviews product={ product } />
                </TabPanel>
            </TabContext>
        </div>
    )
}

export default Product
