import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateCatState } from '../reducers/create-cat.reducer';
import { UpdateCatState } from '../reducers/update-cat.reducer';

 
export const selectUpdateCatState = (state: AppState) => state.updateCatStates;
 
export const selectUpdateCatSuccess = createSelector(
  selectUpdateCatState,
  (state: UpdateCatState) => {
    return state.created;
  }
);