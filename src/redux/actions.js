export function getCoffeeList(data) {
    return dispatch => {
        dispatch({type: 'GET_COFFEE_LIST', data: data})
    }
}