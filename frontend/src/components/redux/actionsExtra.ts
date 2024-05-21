import { ExtraActionTypes } from "./actionTypes";

export const toggleTheme = () => ({
  type: ExtraActionTypes.TOGGLE_THEME,
});

export const setLanguage = (language: string) => ({
  type: ExtraActionTypes.SET_LANGUAGE,
  payload: language,
});
