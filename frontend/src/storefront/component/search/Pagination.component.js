import { makeStyles } from '@material-ui/core'
import ReactPagination from '@material-ui/lab/Pagination'
import queryString from 'query-string'
import { CONFIG } from '../../../base/Config'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > ul': {
            justifyContent: 'center'
        }
    }
}))

export function Pagination(props) {
    const { search: { aggregations: { count } }, page } = props
    const classes = useStyles()

    const onClick = (event, value) => {
        const a = queryString.parse(window.location.search)
        a.page = value
        window.location.search = queryString.stringify(a)
    }

    return (
        <div>
            <ReactPagination className={ classes.root } page={ parseInt(page) } count={ Math.ceil(count / CONFIG.SEARCH.PER_PAGE) } onChange={ onClick } />
        </div>
    )
}

export default Pagination
