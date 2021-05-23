import { useSelector } from 'react-redux'

export function roundPriceValue(value) {
    return (Math.round(value * 100) / 100).toFixed(2)
}

export function Price(props) {
    const { value } = props
    const { currency, currencySignPosition } = useSelector((state) => state.ConfigReducer)

    switch (currencySignPosition) {
        case 'left':
            return `${ roundPriceValue(value) } ${ currency }`
        default:
            return `${ roundPriceValue(value) } ${ currency }`
    }
}

export default Price
