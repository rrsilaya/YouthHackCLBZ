// Actions
const IMG_LOADED = 'IMG_LOADED';

// Action Creators
export const setImageLoaded = () => ({
  type: IMG_LOADED
});

// Initial State
const initialState = {
  imagesLoaded: false
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case IMG_LOADED:
      return {
        ...state,
        imagesLoaded: true
      };

    default:
      return state;
  }
};

export default reducer;
