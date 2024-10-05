import { createSlice } from "@reduxjs/toolkit";
import {
  addUserRecords,
  deleteUserRecords,
  updateUserEducation,
  updateUserId,
  updateUserName,
  updateUserPlace,
} from "./updateUserReducer";

const initState: initState = {
  name: "",
  id: "",
  place: "",
  education: "",
  totalRecords: [],
};

export const userReducer = createSlice({
  name: "useData",
  initialState: initState,
  reducers: {
    updateName: updateUserName,
    updateId: updateUserId,
    updatePlace: updateUserPlace,
    updateEducations: updateUserEducation,
    addUser: addUserRecords,
    deleteUser: deleteUserRecords,
  },
});

export const {
  updateName,
  updateId,
  updatePlace,
  updateEducations,
  addUser,
  deleteUser,
} = userReducer.actions;
