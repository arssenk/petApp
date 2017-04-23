/**
 * Created by arsen on 22.04.17.
 */
import {combineReducers} from 'redux';
import AuthReduser from './AuthReducer';


export default combineReducers({
    auth: AuthReduser
});