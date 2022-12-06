import { createReducer, on } from "@ngrx/store";
import { Cat } from "src/app/models/cat.model";
import { loadCat } from "../actions/cat-details.action";
 
export interface CatDetailsState {
  cat: Cat,
}
 
export const initialState: CatDetailsState = {
  cat: {} as Cat,
};
 
export const catDetailsReducer = createReducer(
  initialState,
  on(loadCat, (state, { cat }) => {
    return {
      ...state,
      cat: cat,
    };
  })
);