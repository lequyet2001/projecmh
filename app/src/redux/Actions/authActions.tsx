// authActions.js
import { login } from '../../fetchAPI/Login';
import { LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from '../ActionsType';



export const  loginSuccess =  (userData:any) => ({
  type: LOGIN_SUCCESS,
  payload:  userData
});
export const loginFail = () => ({
  type: LOGIN_FAIL,
  payload: null
});


export const logout = () => ({
  type: LOGOUT,
});

export const level =(level:any) =>({
  type:'LEVEL',
  payload:level
})

