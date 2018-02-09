// Updates table data
const table = (requiredActionType) => (state = {}, action) => {
    if (action.type === requiredActionType && action.response ) {
        return action.response.result
    }
    return state
};

export default table