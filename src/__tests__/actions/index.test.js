import {fetchServerConfigurations, setInputValue} from '../../actions/index'
import {
    SERVER_CONFIGURATION_REQUEST,
    SERVER_CONFIGURATION_SUCCESS,
    SERVER_CONFIGURATION_FAILURE,
    SET_INPUT_VALUE
} from '../../actions/index';
import {CALL_API, Schemas} from '../../middleware/api';

describe('actions', () => {
    it('fetchServerConfigurations creates an action to make an ajax request', () => {
        const serverId = 'api.tenable.io';
        const host = '2';
        const expectedAction = {
            [CALL_API]: {
                types: [SERVER_CONFIGURATION_REQUEST, SERVER_CONFIGURATION_SUCCESS, SERVER_CONFIGURATION_FAILURE],
                url:  "api.tenable.io/download/request?host=2&page=0&sizePerPage=10",
                schema: Schemas.TABLE
            }
        };

        expect(fetchServerConfigurations(serverId, host)).toEqual(expectedAction);
    });

    it('setInputValue creates an action to store the input value', () => {
        const value = 12;
        const expectedAction = {
            type: SET_INPUT_VALUE,
            payload: value
        };

        expect(setInputValue(value)).toEqual(expectedAction);
    });
});