import { Box, Link, Typography } from '@material-ui/core'
import { GetCategories } from '../../query/Category.query'

export function Menu() {
    const categories = GetCategories()

    if (!categories) {
        return null
    }

    const rootCategory = categories.find((category) => category.id === '1')

    const renderFirstLevelItem = (parentCategory) => {
        const { name, urlKey } = parentCategory
        const children = categories.filter((category) => category.categoryId == parentCategory.id && category.name != 'Root')
        console.log(children)
    
        return (
            <Link href={ `/category/${ urlKey }` } color="inherit">
                <Typography>
                    { name }
                </Typography>
            </Link>
        )
    }

    const renderFirstLevelList = () => {
        const children = categories.filter((category) => category.categoryId == rootCategory.id && category.name != 'Root')

        return children.map(renderFirstLevelItem)
    }

    return (
        <Box display="flex">
            { renderFirstLevelList() }
        </Box>
    )
}

export default Menu
