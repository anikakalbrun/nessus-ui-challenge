import {CALL_API, Schemas} from '../middleware/api';
import { getUrl } from '../utils'

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const SERVER_CONFIGURATION_REQUEST = 'SERVER_CONFIGURATION_REQUEST';
export const SERVER_CONFIGURATION_SUCCESS = 'SERVER_CONFIGURATION_SUCCESS';
export const SERVER_CONFIGURATION_FAILURE = 'SERVER_CONFIGURATION_FAILURE';

// Fetches server configuration data from RESTfull API.
// Relies on the custom API middleware defined in ../middleware/api.js.
export const fetchServerConfigurations = (serverId, host, page, sizePerPage) => ({
    [CALL_API]: {
        types: [SERVER_CONFIGURATION_REQUEST, SERVER_CONFIGURATION_SUCCESS, SERVER_CONFIGURATION_FAILURE],
        url: getUrl(serverId, host, page, sizePerPage),
        schema: Schemas.TABLE
    }
});

export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const setInputValue = (value) => ({
    type: SET_INPUT_VALUE,
    payload: value
});