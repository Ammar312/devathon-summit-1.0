export const reducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN": {
      if (action.payload?.fullName && action.payload?.email) {
        const role = action.payload?.isAdmin ? "admin" : "user";
        const user = {
          fullName: action.payload?.fullName,
          email: action.payload?.email,
          _id: action.payload?._id,
          person: action.payload?.person,
        };
        return { ...state, isLogin: true, role, user };
      }
    }
    case "USER_LOGOUT": {
      return { ...state, isLogin: false, role: null, user: {} };
    }
    case "CHANGE_THEME": {
      return { ...state, darkTheme: !state.darkTheme };
    }
    default: {
      return state;
    }
  }
};
