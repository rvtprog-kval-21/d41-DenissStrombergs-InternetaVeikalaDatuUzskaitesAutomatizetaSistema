export const initialState = {
    items: {},
    totals: {
        totalTax: 0,
        subtotal: 0,
        total: 0
    }
}

export function CartReducer(state = JSON.parse(window.localStorage.getItem('CART')) || initialState, action) {
    const { items } = state
    const { type, payload: { item, totals, account } = {} } = action
    console.log(item, totals)

    switch (type) {
        case 'ADD_PRODUCT_TO_CART':
            const out = {
                ...state,
                items: {
                    ...items,
                    [item.id]: item
                },
                totals
            }
            window.localStorage.setItem('CART', JSON.stringify(out))

            return out
        case 'REMOVE_PRODUCT_FROM_CART':
            if (item.quantity) {
                const out = {
                    ...state,
                    items: {
                        ...items,
                        [item.id]: item
                    },
                    totals
                }
                window.localStorage.setItem('CART', JSON.stringify(out))

                return out
            } else {
                const { [item.id]: a, ...other } = items
                const out = {
                    ...state,
                    items: {
                        ...other
                    },
                    totals
                }
                window.localStorage.setItem('CART', JSON.stringify(out))

                return out
            }
        case 'CLEAR_CART':
            window.localStorage.setItem('CART', JSON.stringify(initialState))

            return initialState
        case 'LOAD_CART':
            const out2 = {
                ...state,
                items: {},
                totals: {
                    totalTax: account.totalTax,
                    subtotal: account.subtotal,
                    total: account.total
                }
            }
            account.items.map((item) => out2.items[item.id] = item)
            window.localStorage.setItem('CART', JSON.stringify(out2))

            return out2
        default:
            return state
    }
}

export default CartReducer
