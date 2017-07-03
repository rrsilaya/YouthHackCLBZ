// Actions
const LOGIN_REQ = 'LOGIN_REQ';
const THROW_ERR = 'THROW_ERR';
const REMOVE_ERR = 'REMOVE_ERR';

// Action Creators
export const login = password => ({
  type: LOGIN_REQ
});

export const throwErr = () => ({
  type: THROW_ERR
});

export const rmErr = () => ({
  type: REMOVE_ERR
});

// Initial State
const initialState = {
  isLoading: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQ:
      return {
        ...state,
        isLoading: true
      };

    case THROW_ERR:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    case REMOVE_ERR:
      return {
        ...state,
        hasError: false
      };

    default:
      return state;
  }
};

export default reducer;
