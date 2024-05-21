import { ExtraActionTypes } from "./actionTypes";

interface ExtraState {
  theme: "light" | "dark";
  language: string;
}

const initialState: ExtraState = {
  theme: "light",
  language: "en",
};

const extraReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ExtraActionTypes.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    case ExtraActionTypes.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default extraReducer;
