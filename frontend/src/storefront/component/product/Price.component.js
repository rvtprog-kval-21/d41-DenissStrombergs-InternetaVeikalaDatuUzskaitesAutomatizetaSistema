import { useSelector } from 'react-redux'

export function roundPriceValue(value) {
    return (Math.round(value * 100) / 100).toFixed(2)
}

export function Price(props) {
    const { value, product: { specialDiscountType, specialDiscountValue } = {} } = props
    const { currencySign, currencySignPosition } = useSelector((state) => state.ConfigReducer)
    
    console.log(specialDiscountType, specialDiscountValue)

    switch (currencySignPosition) {
        case 'left':
            return `${ roundPriceValue(value) } ${ currencySign }`
        default:
            return `${ currencySign } ${ roundPriceValue(value) }`
    }
}

export default Price
