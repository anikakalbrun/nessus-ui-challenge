import React from 'react';
import input from '../../reducers/inputReducer';
import {INITIAL_STATE} from '../../reducers/inputReducer';
import {SET_INPUT_VALUE} from '../../actions'

describe('inputReducer', () => {

    it('should return the initial state', () => {
        expect(input(undefined, {})).toEqual(INITIAL_STATE)
    });

    it('should handle SET_INPUT_VALUE', () => {
        const action = {
            type: SET_INPUT_VALUE,
            payload: 12
        };
        expect(input({}, action)).toEqual(12)
    });
});

