import {LOGIN_SUCCESS, 
        LOGIN_FAILURE, 
        STORE_COOKIES,
        USER_INFO,
        LOGOUT,
} from '../../constants';

const initialState = {
  status: 'request',
  isLoggedIn: false,
  error: null,
  cookies: null,
  user_info: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_SUCCESS:
        return { 
            ...state, 
            status: 'success', 
            isLoggedIn: true 
        };
    case LOGIN_FAILURE:
        return {
            ...state, 
            status: 'failed', 
            error: action.payload.error 
        };
    case STORE_COOKIES:
        return { 
            ...state, 
            cookies: action.payload.cookies 
        };
    case USER_INFO:
        return {
            ...state,
            user_info: action.payload.user_info
        };
    case LOGOUT:
        return {
            ...state,
            isLoggedIn: false,
            status : 'request'
        };
    default:
      return state;
  }
};

export default userReducer;