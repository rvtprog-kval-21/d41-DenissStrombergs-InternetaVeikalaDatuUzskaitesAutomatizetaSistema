import { Typography } from '@material-ui/core'

export function renderProductReview(review) {
    const { title, content, author: { firstName, lastName } } = review

    return (
        <div>
            <Typography>
                { `${ firstName } ${ lastName }` }
            </Typography>
            <Typography variant="h5">
                { title }
            </Typography>
            <Typography>
                { content }
            </Typography>
        </div>
    )
}

export function ProductReviews(props) {
    const { product: { reviews } } = props

    return (
        <div>
            { reviews.map(renderProductReview) }
        </div>
    )
}

export default ProductReviews
