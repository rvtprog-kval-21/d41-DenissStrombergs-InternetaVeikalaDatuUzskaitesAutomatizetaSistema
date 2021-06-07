import { makeStyles } from '@material-ui/core'
import ReactPagination from '@material-ui/lab/Pagination'
import { useDispatch } from 'react-redux'
import { CONFIG } from '../../../base/Config'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > ul': {
            justifyContent: 'center'
        }
    }
}))

export function Pagination(props) {
    const dispatch = useDispatch()
    const { search: { aggregations: { count } }, page } = props
    const classes = useStyles()

    const onClick = (_, value) => {
        dispatch({
            type: 'SET_PAGE',
            payload: {
                page: value
            }
        })
    }

    return (
        <div>
            <ReactPagination className={ classes.root } page={ parseInt(page) } count={ Math.ceil(count / CONFIG.SEARCH.PER_PAGE) } onChange={ onClick } />
        </div>
    )
}

export default Pagination
