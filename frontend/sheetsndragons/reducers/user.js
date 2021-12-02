const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER': {
      return { ...state, ...action.user };
    }
    case 'UNSET_USER': {
      return null;
    }
    default: {
      return state;
    }
  }
};
