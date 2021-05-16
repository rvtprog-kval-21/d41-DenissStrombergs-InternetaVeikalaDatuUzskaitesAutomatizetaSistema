import { Typography } from '@material-ui/core'

export function ProductDetails(props) {
    const { product: { description} } = props

    return (
        <Typography>
            { description }
        </Typography>
    )
}

export default ProductDetails
