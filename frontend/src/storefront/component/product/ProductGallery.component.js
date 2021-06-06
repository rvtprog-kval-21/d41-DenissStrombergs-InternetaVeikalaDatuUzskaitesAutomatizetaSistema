import { Box, Card, CardMedia, makeStyles, Paper } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

const useStyles = makeStyles({
    root: {
        maxWidth: 640,
    },
    media: {
        height: 360,
    }
})

export function ProductGallery(props) {
    const classes = useStyles()
    const { product: { base_image, thumbnail_image, other_images } } = props
    const slides = [
        base_image,
        thumbnail_image,
        ...other_images
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const renderSlide = (slide) => {
        const { url, title } = slide
        console.log(url)

        return (
            <Card className={ classes.root } >
                <CardMedia
                    className={ classes.media }
                    image={ url }
                    title={ title }
                />
            </Card>
        )
    }

    return (
        <Carousel>
            { slides.map(renderSlide) }
        </Carousel>
    )
}

export default ProductGallery
