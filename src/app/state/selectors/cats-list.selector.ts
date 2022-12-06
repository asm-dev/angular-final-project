import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CatState } from '../reducers/cats-list.reducer';

 
 
export const selectCatState = (state: AppState) => state.catStates;
 
export const selectCats = createSelector(
  selectCatState,
  (state: CatState) => {
    return state.cats;
  }
);
 
export const selectLoading = createSelector(
  selectCatState,
  (state: CatState) => {
    return state.loading;
  }
);