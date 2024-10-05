import { useAppDispatch, useAppSelector } from "../../store/hooksTypes";
import { store } from "../../store/store";
import { DisplayRecords } from "../userReducerModel/DisplayRecords";
import {
  addUser,
  updateEducations,
  updateId,
  updateName,
  updatePlace,
} from "../userReducerModel/userReducer";
import "./InputElements.css";

export const InputElements = () => {
  const dispatch = useAppDispatch();
  const stor = store.getState();

  const saveUser = () => {
    console.log("Check mutation: ",stor.useData)
    dispatch(addUser(stor.useData));
  };

  return (
    <>
      <div className="container">
        <div className="name item">
          <h4>Name</h4>
          <input
            id="name"
            type="text"
            placeholder="Enter name..."
            onChange={(e) => dispatch(updateName(e.target.value))}
          />
        </div>
        <div className="id item">
          <h4>Id</h4>
          <input
            id="id"
            type="text"
            placeholder="Enter id..."
            onChange={(e) => dispatch(updateId(e.target.value))}
          />
        </div>
        <div className="place item">
          <h4>Place</h4>
          <input
            id="place"
            type="text"
            placeholder="Enter place..."
            onChange={(e) => dispatch(updatePlace(e.target.value))}
          />
        </div>
        <div className="education item">
          <h4>Education</h4>
          <input
            id="education"
            type="text"
            placeholder="Enter education..."
            onChange={(e) => dispatch(updateEducations(e.target.value))}
          />
        </div>

        <button onClick={saveUser}>Save User</button>
      </div>
      <DisplayRecords totalRec={stor.useData.totalRecords as initState[]} />
    </>
  );
};
