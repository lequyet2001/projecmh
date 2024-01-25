// authReducer.js
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './ActionsType';

const initialState = {
    isLogin: false,
    data: null,
    level:0
};

const authReducer =  (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                isLogin: true,
                data: action.payload,
                level:0
            };
        case LOGIN_FAIL:
            return {
                isLogin: false,
                data: null,
                level:0
            };

        case LOGOUT:
            return {
                isLogin: false,
                data: null,
                lvel:0
            };
        case 'LEVEL':
            return {
                isLogin: true,
                level: action.payload,
                data: state.data
            }
        default:
            return state;
    }
};

export default authReducer;
