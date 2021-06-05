import { Grid, Typography } from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { GetAllProductReviews } from '../../query/Review.query'
import ReviewForm from '../account/ReviewForm.component'
import moment from 'moment'

export function renderProductReview(review) {
    const { date, title, content, customer: { firstName, lastName }, rating } = review

    return (
        <Grid item xs={ 12 }>
            <Grid container spacing={ 1 }>
                <Grid item xs={ 12 }>
                    <Typography variant="body">
                        { moment(date).format('MMMM Do YYYY, h:mm:ss a') }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <Typography>
                        { `${ firstName } ${ lastName }` }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <Typography variant="h5">
                        { title }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <Typography>
                        { content }
                    </Typography>
                </Grid>
                <Grid item xs={ 12 }>
                    <Rating disabled value={ rating } max={ 10 } />
                </Grid>
            </Grid>
        </Grid>
    )
}

export function ProductReviews(props) {
    const { product: { id } } = props
    const reviews = GetAllProductReviews({ productId: id })

    if (!reviews) {
        return null
    }

    return (
        <Grid container spacing={ 2 }>
            <Grid item xs={ 12 }>
                <Typography variant="h5">Write a review:</Typography>
            </Grid>
            <Grid item xs={ 12 }>
                <ReviewForm mode="create" productId={ id } />
            </Grid>
            <Grid item xs={ 12 }>
                <Grid container spacing={ 4 }>
                    { reviews.map(renderProductReview) }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductReviews
