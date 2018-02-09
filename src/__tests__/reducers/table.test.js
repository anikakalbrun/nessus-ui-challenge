import React from 'react';
import table from '../../reducers/table';

describe('table reducer', () => {

    it('should return the initial state', () => {
        expect(table('TEST')(undefined, {})).toEqual({})
    });

    it('should return table data', () => {
        const result = [];
        const action = {
            type: "SERVER_CONFIGURATION_SUCCESS",
            response: {
                result: result
            }

        };
        expect(table("SERVER_CONFIGURATION_SUCCESS")({}, action)).toEqual(result);
    })
});
