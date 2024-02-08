import {
  SET_LANGUAGE,
} from "./userDefinedActions.js";

// languageReducer.js
const initialState = {
  language: { name: "English", value: "en", className: "flag-icon-us" }, // Default language is English
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        language: action.payload,
      };
    default:
      return state;
  }
};

export {
  languageReducer,
};
