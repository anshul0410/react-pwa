const Reducers = {};

Reducers.coffeeList = function coffeeList(state = false, actions) {
    switch(actions.type) {
        case 'GET_COFFEE_LIST':
            return actions.data;
        default:
            return state;
    }
}

export default Reducers;