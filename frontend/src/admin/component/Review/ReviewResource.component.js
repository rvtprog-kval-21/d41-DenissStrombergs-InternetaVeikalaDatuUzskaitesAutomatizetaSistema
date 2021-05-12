import ReviewIcon from '@material-ui/icons/Bookmark'
import ReviewList from './ReviewList.component'
import ReviewCreate from './ReviewCreate.component'
import ReviewEdit from './ReviewEdit.component'

export const ReviewResource = {
    name: 'Review',
    icon: ReviewIcon,
    list: ReviewList,
    create: ReviewCreate,
    edit: ReviewEdit
}

export default ReviewResource
