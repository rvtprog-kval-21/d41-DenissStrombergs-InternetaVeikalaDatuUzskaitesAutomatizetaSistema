import { Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { GetAllProductReviews } from '../../query/Review.query'
import ReviewForm from '../account/ReviewForm.component'

export function renderProductReview(review) {
    const { date, title, content, customer: { firstName, lastName }, rating } = review

    return (
        <div>
            <Typography>
                { date }
            </Typography>
            <Typography>
                { `${ firstName } ${ lastName }` }
            </Typography>
            <Typography variant="h5">
                { title }
            </Typography>
            <Typography>
                { content }
            </Typography>
            <Rating disabled value={ rating } max={ 10 } />
        </div>
    )
}

export function ProductReviews(props) {
    const { product: { id } } = props
    const reviews = GetAllProductReviews({ productId: id })

    if (!reviews) {
        return null
    }

    return (
        <div>
            <ReviewForm productId={ id } />
            <div>
                { reviews.map(renderProductReview) }
            </div>
        </div>
    )
}

export default ProductReviews
