import React from 'react';
import error from '../../reducers/error';
import {RESET_ERROR_MESSAGE} from '../../actions'

describe('error', () => {

    it('should return the initial state', () => {
        expect(error('TEST')(undefined, {})).toEqual(null)
    });

    it('should handle RESET_ERROR_MESSAGE', () => {
        const action = {type: RESET_ERROR_MESSAGE};
        expect(error('TEST')({}, action)).toEqual(null)
    });

    it('should return error', () => {
        const err = {
            status: 'unknown',
                message: 'Something bad happened'
        };
        const action = {
            type: "SERVER_CONFIGURATION_FAILURE",
            error: err

        };
        expect(error("SERVER_CONFIGURATION_FAILURE")(null, action)).toEqual(err);
    })
});
