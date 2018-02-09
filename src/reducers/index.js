import {combineReducers} from 'redux';
import * as ActionTypes from '../actions';

import table from './table';
import error from './error';
import loading from './loadingReducer';
import input from './inputReducer'

const serverConfigurationsTypes = [
    ActionTypes.SERVER_CONFIGURATION_REQUEST,
    ActionTypes.SERVER_CONFIGURATION_SUCCESS,
    ActionTypes.SERVER_CONFIGURATION_FAILURE
];

const fetchingServerConfigurations = loading({
    types: serverConfigurationsTypes
});

const serverConfigurationsTable = combineReducers({
    data: table(serverConfigurationsTypes[1]),
    error: error(serverConfigurationsTypes[2]),
    fetchingServerConfigurations,
    inputValue: input
});

export default serverConfigurationsTable;