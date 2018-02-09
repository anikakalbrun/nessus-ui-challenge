import {SET_INPUT_VALUE} from '../actions';

export const INITIAL_STATE = 2;

const input = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return action.payload;
        default:
            return state
    }
};

export default input