import * as types from '../constants/actionTypes';


export default function(state = [], action) {

    switch (action.type) {
        case types.FETCH_NEWS:
            return state.concat(action);

        default:
            return state;
    }

}