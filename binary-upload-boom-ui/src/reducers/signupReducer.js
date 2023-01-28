export const signupReducer = (state, action) => {
  switch (action.type) {
    case 'change_first_name': {
      return {
        ...state,
        firstName: action.value,
      };
    }
    case 'change_last_name': {
      return {
        ...state,
        lastName: action.value,
      };
    }
    case 'change_email': {
      return {
        ...state,
        email: action.value,
      };
    }
    case 'change_password': {
      return {
        ...state,
        password: action.value,
      };
    }
    case 'check_newsletter': {
      return {
        ...state,
        newsLetter: action.value,
      };
    }
    default: {
      throw new Error(`no matching action${action.type}`);
    }
  }
};
