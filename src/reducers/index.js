import { combineReducers } from "redux";
import LibraryReducer from "./LibraryReducer";
import SelectionReducer from './SelectionReducer';

//combine two separte reducers
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
}); //object 

// console.log(store.getState());
// { libraries: [ {id: 1,....}] }
