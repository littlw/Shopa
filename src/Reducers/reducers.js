import { CHANGE_SEARCH_FIELD,
    REQUEST_GOODS_PENDING,
    REQUEST_GOODS_SUCCESS,
    REQUEST_GOODS_FAILED, 
    SET_ROUTE,
    ADMIN_SIGN_IN,
    LOAD_USER  } from "../Constants/constants.js"

const initialState = {
    searchfield: '',
    isAdmin: false,
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        surname: '',
        email: '',
        joined: ''

    }
}

export const loadUser = (state=initialState, action={}) => {
    switch(action.type) {
        case LOAD_USER:
            return {...state,
            user: action.payload
    };
        default: 
            return state;
}
};

export const searchGoods = (state=initialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
        return Object.assign({}, state,{ searchfield: action.payload });
        default:
            return state;
    }
}

export const adminSignIn = (state = initialState, action = {}) => {
    switch (action.type) {
      case SET_ROUTE:
        return { ...state, route: action.payload };
      case ADMIN_SIGN_IN:
        return { ...state, isAdmin: true};
      default:
        return state;
    }
  };

const initialStateGoods = {
    isPending: false,
    goods: [], 
    error: ''
}

export const requestGoods = (state=initialStateGoods, action={})=> {
    switch(action.type) {
case REQUEST_GOODS_PENDING:
    return Object.assign({}, state, {isPending: true})
case REQUEST_GOODS_SUCCESS:
    return Object.assign({}, state, {goods: action.payload, isPending: false })
case REQUEST_GOODS_FAILED:
return Object.assign({}, state, {error: action.payload, isPending: false })
default:
    return state;
    }
}

