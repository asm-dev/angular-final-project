import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CatDetailsState } from '../reducers/cat-details.reducer';

export const selectCatDetailState = (state: AppState) => state.catDetailsStates;
 
export const selectCat = createSelector(
  selectCatDetailState,
  (state: CatDetailsState) => {
    return state.cat;
  }
);