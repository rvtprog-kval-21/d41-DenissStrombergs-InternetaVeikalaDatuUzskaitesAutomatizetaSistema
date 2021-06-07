const initialState = {
    perPage: 12,
    sort: 'NO_ORDER',
    page: 1,
    attributeValues: {}
}

export function SearchReducer(state = initialState, action) {
    const { attributeValues } = state
    const { type, payload: { code, values, sort, page } = {} } = action

    switch (type) {
        case 'SET_PAGE':
            return {
                ...state,
                page
            }
        case 'SET_SORT':
            console.log(sort)
            return {
                ...state,
                sort
            }
        case 'SET_ATTRIBUTE_VALUES':
            return {
                ...state,
                attributeValues: {
                    ...attributeValues,
                    [code]: values
                }
            }
        case 'RESET_FILTERS':
            return initialState
        default:
            return state
    }
}

export default SearchReducer
