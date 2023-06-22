import * as usersTypes from './user.types';

const initialState = {
     loading: false,
     error: false,
     users: [],
}


export const reducer = (state = initialState, { type, payload }) => {

     switch (type) {
          case usersTypes.USER_LOADING: {
               return { ...state, loading: true, error: false };
          }

          case usersTypes.USER_ERROR: {
               return { ...state, loading: false, error: true };
          }

          case usersTypes.USER_SUCCESS: {
               return { users: payload, loading: false, error: false };
          }

          default: return state;
     }
}