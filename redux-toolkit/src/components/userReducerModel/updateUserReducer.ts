import { PayloadAction } from "@reduxjs/toolkit";

export const updateUserName = (
  state: initState,
  action: PayloadAction<string>
) => {
  return {
    ...state,
    name: action.payload,
  };
};
export const updateUserId = (
  state: initState,
  action: PayloadAction<string>
) => {
  return {
    ...state,
    id: action.payload,
  };
};
export const updateUserPlace = (
  state: initState,
  action: PayloadAction<string>
) => {
  return {
    ...state,
    place: action.payload,
  };
};
export const updateUserEducation = (
  state: initState,
  action: PayloadAction<string>
) => {
  return {
    ...state,
    education: action.payload,
  };
};

export const addUserRecords = (
  state: initState,
  action: PayloadAction<initState>
) => {
  console.log("Save ", state, action);
  return {
    ...state,
    totalRecords: state.totalRecords?.length
      ? [...state.totalRecords, action.payload]
      : [action.payload],
  };
};
export const deleteUserRecords = (
  state: initState,
  action: PayloadAction<string>
) => {
  return {
    ...state,
    totalRecords: state.totalRecords?.filter(
      (record) => record.id !== action.payload
    ),
  };
};
