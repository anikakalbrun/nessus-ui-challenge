// Updates error message to notify about the failed fetches.
let error = (allowedActionType) => (state = null, action) => {
    const {type, error} = action;

    if (type === "RESET_ERROR_MESSAGE") {
        return null
    } else if (action.type === allowedActionType && error) {
        return error
    }
    return state
};

export default error;