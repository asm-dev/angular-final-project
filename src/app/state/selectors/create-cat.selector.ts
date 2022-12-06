import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateCatState } from '../reducers/create-cat.reducer';

 
export const selectCreateCatState = (state: AppState) => state.createCatStates;
 
export const selectCreateCatSuccess = createSelector(
  selectCreateCatState,
  (state: CreateCatState) => {
    return state.created;
  }
);