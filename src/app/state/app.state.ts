import { ActionReducerMap } from "@ngrx/store";
import { catDetailsReducer, CatDetailsState } from "./reducers/cat-details.reducer";
import { catsReducer, CatState } from "./reducers/cats-list.reducer";
 
export interface AppState {
  catStates: CatState;
  catDetailsStates : CatDetailsState;
}
 
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  catStates: catsReducer,
  catDetailsStates : catDetailsReducer,
};