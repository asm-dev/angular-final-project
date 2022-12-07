import { ActionReducerMap } from "@ngrx/store";
import { catDetailsReducer, CatDetailsState } from "./reducers/cat-details.reducer";
import { catsReducer, CatState } from "./reducers/cats-list.reducer";
import { createCatReducer, CreateCatState } from "./reducers/create-cat.reducer";
import { updateCatReducer, UpdateCatState } from "./reducers/update-cat.reducer";
 
export interface AppState {
  catStates: CatState;
  catDetailsStates : CatDetailsState;
  createCatStates: CreateCatState;
  updateCatStates: UpdateCatState;
}
 
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  catStates: catsReducer,
  catDetailsStates : catDetailsReducer,
  createCatStates: createCatReducer,
  updateCatStates: updateCatReducer,
};