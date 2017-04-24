/**
 * Created by arsen on 22.04.17.
 */
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGGING } from '../actions/types'

const  INITIAL_STATE = {email: 'test@counter.test', password: '123456789', user: null, error: '', loading: false};

export  default  (state = INITIAL_STATE, action) => {
    //console.log(action);
    switch (action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload};
        case LOGIN_USER_SUCCESS:
            return {...state, ...INITIAL_STATE, user: action.payload};
        case LOGIN_USER_FAIL:
            return{...state, error: 'Authentication Failed.', password: '', loading: false };
        case LOGGING:
            return{...state, loading: true, error: ''};
        default:
            return state;
    }
}