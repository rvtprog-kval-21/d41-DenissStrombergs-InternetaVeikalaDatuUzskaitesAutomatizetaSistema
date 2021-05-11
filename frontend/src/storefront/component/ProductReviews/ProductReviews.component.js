import { Typography } from "@material-ui/core"

export function renderReview(review) {
    const { title, content, author: { first_name, last_name } } = review

    return (
        <div>
            <Typography>
                { `${ first_name } ${ last_name }` }
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
            { reviews.map(renderReview) }
        </div>
    )
}

export default ProductReviews
