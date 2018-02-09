// Creates a reducer managing loading, given the action types to handle,
// and a function telling how to extract the key from an action.
const loading = ({types}) => {

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected types to be an array of three elements.')
    }
    if (!types.every(t => typeof t === 'string')) {
        throw new Error('Expected types to be strings.')
    }

    const [requestType, successType, failureType] = types;

    const updateLoading = (action) => {
        switch (action.type) {
            case requestType:
                return true;
            case successType:
            case failureType:
                return false;
            default:
                return false
        }
    };

    return (state = {}, action) => {
        switch (action.type) {
            case requestType:
            case successType:
            case failureType:
                return {
                    ...state,
                    isFetching: updateLoading(action)
                };
            default:
                return state
        }
    }
};

export default loading

