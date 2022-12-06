import { createReducer, on } from "@ngrx/store";
import { createCatSuccess, initCreateCat } from "../actions/create-cat.action";

export interface CreateCatState {
  created: boolean,
}
 
export const initialState: CreateCatState = {
  created: false,
};
 
export const createCatReducer = createReducer(
  initialState,
  on(initCreateCat, (state) => {
    return {
      ...state,
      created: false,
    };
  }),
  on(createCatSuccess, (state) => {
    return {
      ...state,
      created: true,
    };
  })
);