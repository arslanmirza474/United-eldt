import {

  SET_LANGUAGE,

} from "./userDefinedActions";

export const setLanguage = (language) => ({
  type: SET_LANGUAGE,
  payload: language,
});
