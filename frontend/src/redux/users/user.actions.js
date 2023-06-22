import * as usersTypes from './user.types';

/** 
 * * Using 'fetch' instead of 'axios' because when I'm sending error from the backend at
 * * that time axios is not able to catch the response messages with error status codes
 * * like 400 and above codes, but fetch is able get the errors with message and the 
 * * status properly,
 * * But for accessing the status we will get it from the first 'response' and for 
 * * the data we need to do 'response.json()'
 * */


/**
 * Get all user by calling this action function
 * @param {Function} toastMsg - A function which will show the toast message.
 * */
export const getAllUsersAction = (toastMsg) => async (dispatch) => {
     if (!toastMsg) return;

     dispatch({ type: usersTypes.USER_LOADING });
     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/user/get`);
          const data = await res.json();

          if (res.ok) {
               dispatch({ type: usersTypes.USER_SUCCESS, payload: data.data })
          } else {
               dispatch({ type: usersTypes.USER_ERROR })
          }

          toastMsg({
               title: data.message,
               status: res.ok ? 'success' : 'error',
          })

     } catch (error) {
          console.log('error:', error)
          dispatch({ type: usersTypes.USER_ERROR })
          toastMsg({
               title: error.message,
               status: 'error',
          })
     }
}


/**
 * Update a user's credentials
 * @param {Function} toastMsg - A function which will show the toast message.
 * @param {string} userId - User's id in which we'll apply the update
 * @param {Object} udate - All the udpates we want to apply for the specific user
 * */
export const udpateUserAction = (toastMsg, userId, update) => async (dispatch) => {
     if (!toastMsg || !userId || !update) return;

     dispatch({ type: usersTypes.USER_LOADING });
     try {
          const res = await fetch(`${import.meta.env.VITE_APP_SERVER_URL}/user/update/${userId}`, {
               method: "PATCH",
               body: JSON.stringify(update),
               headers: {
                    'Content-Type': 'application/json'
               }
          });
          const data = await res.json();

          if (res.ok) {
               dispatch(getAllUsersAction(toastMsg))
          } else {
               dispatch({ type: usersTypes.USER_ERROR })
               toastMsg({
                    title: data.message,
                    status: 'error',
               })
          }
     } catch (error) {
          console.log('error:', error)
          dispatch({ type: usersTypes.USER_ERROR })
          toastMsg({
               title: error.message,
               status: 'error',
          })
     }
}