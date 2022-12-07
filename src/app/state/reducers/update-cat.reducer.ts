import { createReducer, on } from "@ngrx/store";
import { initUpdateCat, UpdateCatSuccess } from "../actions/update-cat.action";

export interface UpdateCatState {
  created: boolean,
}
 
export const initialState: UpdateCatState = {
  created: false,
};
 
export const updateCatReducer = createReducer(
  initialState,
  on(initUpdateCat, (state) => {
    return {
      ...state,
      created: false,
    };
  }),
  on(UpdateCatSuccess, (state) => {
    return {
      ...state,
      created: true,
    };
  })
);