import { createAction, props } from "@ngrx/store";
import { Cat } from "src/app/models/cat.model";
 
export const loadingCat = createAction(
  '[Cat Details] Loading Cat',
  props<{ id: number }>()
);
 
export const loadCat = createAction(
  '[Cat Details] Load Cat',
  props<{ cat: Cat }>()
);