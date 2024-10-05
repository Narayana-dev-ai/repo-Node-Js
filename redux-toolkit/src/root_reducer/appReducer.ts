import { userReducer } from "../components/userReducerModel/userReducer";

export const rootReducer = {
  [userReducer.name]: userReducer.reducer,
};
