import { createReducer, on } from "@ngrx/store";
import { Cat } from "src/app/models/cat.model";
import { loadCats, loadingCats } from "../actions/cats-list.action";
 
export interface CatState {
  loading: boolean,
  cats: Cat[],
}
 
export const initialState: CatState = {
  cats: [],
  loading: false,
};
 
export const catsReducer = createReducer(
  initialState,
  on(loadingCats, (state) => {
    return {
      ...state,
      loading: true,
    };
  }),
  on(loadCats, (state, { cats }) => {
    return {
      ...state,
      apartments: cats,
      loading: false,
    };
  })
);