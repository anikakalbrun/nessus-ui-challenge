import React from 'react';
import loading from '../../reducers/loadingReducer';

const requestType = "SERVER_CONFIGURATION_REQUEST";
const successType = "SERVER_CONFIGURATION_SUCCESS";
const failureType = "SERVER_CONFIGURATION_FAILURE";
const callApi = {types: [requestType, successType, failureType]};

const loadingReducer = loading(callApi);

describe('loadingReducer', () => {
    it('should return the initial state', () => {
        expect(loadingReducer(undefined, {})).toEqual({})
    });

    it('should handle requestType', () => {
        const stateBefore = {};
        const action = {
            type: requestType
        };
        const stateAfter = {
            isFetching: true
        };

        expect(loadingReducer(stateBefore, action)).toEqual(stateAfter)
    });

    it('should handle successType', () => {
        const stateBefore = {};
        const action = {type: successType};
        const stateAfter = {
            isFetching: false
        };

        expect(loadingReducer(stateBefore, action)).toEqual(stateAfter)
    });

    it('should handle failureType', () => {
        const stateBefore = {};
        const action = {type: failureType};
        const stateAfter = {
            isFetching: false
        };

        expect(loadingReducer(stateBefore, action)).toEqual(stateAfter)
    });

    it('should throw Error if the argument action.types in not an array of 3 items', () => {
        const types = {types: [requestType, successType]};
        expect(() => loading(types)).toThrowError('Expected types to be an array of three elements.');
    });

    it('should throw Error if the argument action.types in not an array of 3 strings', () => {
        const types = {types: [requestType, successType, {}]};
        expect(() => loading(types)).toThrowError('Expected types to be strings.');
    })
});
