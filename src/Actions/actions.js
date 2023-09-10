import { CHANGE_SEARCH_FIELD,
    REQUEST_GOODS_PENDING,
    REQUEST_GOODS_SUCCESS,
    REQUEST_GOODS_FAILED, 
    SET_ROUTE,
    ADMIN_SIGN_IN,
    LOAD_USER } from "../Constants/constants.js"

export const setSearchfield = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const adminSignIn = () => (dispatch) => {
  dispatch({ type: SET_ROUTE, payload: 'admin' }); 
  dispatch({ type: ADMIN_SIGN_IN }); 
};

export const loadUser = (data) => {
  return {
    type: LOAD_USER,
    payload: {
      id: data.id,
      name: data.name,
      surname: data.surname,
      email: data.email,
      joined: data.joined
    }
  }
};

export const requestGoods = () => (dispatch) => {
    dispatch({ type: REQUEST_GOODS_PENDING});
    fetch('http://localhost:3000/goods')
      .then(response=> response.json())
      .then(data => dispatch({type: REQUEST_GOODS_SUCCESS, payload: data}))
      .catch(error => dispatch({ type: REQUEST_GOODS_FAILED, payload: error}))
}

export const setRoute = (route) => ({
    type: SET_ROUTE,
    payload: route
  });
  