import { ActionReducerMap } from "@ngrx/store";
import { catsReducer, CatState } from "./reducers/cats-list.reducer";
 
export interface AppState {
  catStates: CatState;
}
 
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  catStates: catsReducer,
};