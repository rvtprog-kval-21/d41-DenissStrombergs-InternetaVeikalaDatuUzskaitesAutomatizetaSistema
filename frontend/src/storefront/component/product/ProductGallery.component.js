import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function ProductGallery(props) {
    const { product: { media: { base, other } } } = props
    const slides = [
        base,
        ...other
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    const renderSlide = (slide) => {
        return (
            <div>
                <img src={ slide } />
            </div>
        )
    }

    return (
        <Slider { ...settings }>
            { slides.map(renderSlide) }
        </Slider>
    )
}

export default ProductGallery
