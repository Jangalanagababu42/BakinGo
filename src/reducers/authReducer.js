export const authReducer = (authState, action) => {
  switch (action.type) {
    case "TOKEN":
      return { ...authState, token: action.payload };

    case "USER":
      return { ...authState, user: action.payload };
    default:
      return authState;
  }
};
