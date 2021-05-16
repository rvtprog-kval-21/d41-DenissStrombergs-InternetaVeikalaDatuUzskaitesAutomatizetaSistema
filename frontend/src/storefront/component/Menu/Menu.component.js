import { Box, Link, Typography } from '@material-ui/core'
import { GetCategories } from '../../query/Category.query'

export function renderFirstLevelItem(category) {
    const { name, urlKey } = category

    return (
        <Link href={ `/category/${ urlKey }` } color="inherit">
            <Typography>
                { name }
            </Typography>
        </Link>
    )
}

export function renderFirstLevelList(categories, parentCategory) {
    const children = categories.filter((category) => category.categoryId == parentCategory.id && category.name != 'Root')

    return children.map(renderFirstLevelItem)
}

export function Menu() {
    const categories = GetCategories()

    if (!categories) {
        return null
    }

    const rootCategory = categories.find((category) => category.id === '1')

    return (
        <Box display="flex">
            { renderFirstLevelList(categories, rootCategory) }
        </Box>
    )
}

export default Menu
