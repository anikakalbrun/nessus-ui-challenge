import {normalize} from 'normalizr';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { generateData } from '../utils'

// Mock any GET request
const mock = new MockAdapter(axios);
mock.onGet(/.*/).reply(config => [200, generateData(config.params.inputValue - 1)]);


// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
const callApi = (url, schema, inputValue) => {
    return axios.get(url, { params: { inputValue: inputValue } })
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Object.assign({}, normalize(response.data, schema))
            }
        })
};

// We use this Normalizr schemas to transform API responses from a nested form
// to a flat form. Arrays rare placed in `entities`, and nested
// JSON objects are replaced with their IDs.
//const serverConfiguration = new schema.Entity('configurations', {}, {idAttribute: 'name'});


//because react-bootstrap-table needs an array I did not add any defined schema for this particular API response => I will store the data as array
//But if I would need to access the data in other parts of the application, I would store the data with an index and access it with selectors.
export const Schemas = {
    TABLE: {}
};

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = 'Call API';

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {

    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let {url} = callAPI;
    const {schema, types} = callAPI;

    if (typeof url !== 'string') {
        throw new Error('Specify a string url URL.')
    }
    if (!schema) {
        throw new Error('Specify one of the exported Schemas.')
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    const actionWith = data => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction
    };

    const [requestType, successType, failureType] = types;
    next(actionWith({type: requestType}));

    return callApi(url, schema, store.getState().inputValue).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: {
                status: error.response.status || 'unknown',
                message: error.message || 'Something bad happened'
            }
        }))
    )
}
