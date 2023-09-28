const siteInitial = {
  title: "Merhaba Redux!",
  theme: "light",
  language: "tr",
  user: {
    name: "Anonim",
    role: "anonim", // admin | user
  },
};

export function siteReducer(state = siteInitial, action) {
  const { type, payload } = action;

  switch (type) {
    case "CHANGE_TITLE":
      return { ...state, title: payload };

    case "SET_USER":
      return { ...state, user: payload };

    default:
      return state;
  }
}

// ACTIONS **************************

/**
 * Creates an Action Object to change redux title
 * @param {String} newTitle new title value to change
 * @returns Action Object
 */
export const changeTitleAction = (newTitle) => ({
  type: "CHANGE_TITLE",
  payload: newTitle,
});

export const setUserAction = (user) => ({
  type: "SET_USER",
  payload: user,
});
