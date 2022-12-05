import { createAction, props } from "@ngrx/store";
import { Cat } from "src/app/models/cat.model";
 
export const loadingCats = createAction(
  '[Cats] Loading Cats',
);
 
export const loadCats = createAction(
  '[Cats] Load Cats',
  props<{ cats: Cat[] }>()
);