import {LOGIN_SUCCESS,
        LOGIN_FAILURE,
        USER_INFO,
        LOGOUT,
        UPDATE_TRAIL_HISTORY,
        GET_TRAIL_HISTORY,
} from '../../constants';

const initialState = {
  status: 'request',
  isLoggedIn: false,
  error: null,
  user_info: {},
  trailHistory: [],
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

    case USER_INFO:
        return {
            ...state,
            user_info: action.payload.user_info
        };

    case LOGOUT:
        return {
            ...state,
            status : 'request',
            isLoggedIn: false
        };

    case UPDATE_TRAIL_HISTORY:
        return {
            ...state,
            trailHistory: action.payload.trailHistory
        };

    case GET_TRAIL_HISTORY:
        return {
            ...state,
            trailHistory: state.trailHistory
        };

    default:
      return state;
  }
};

export default userReducer;
