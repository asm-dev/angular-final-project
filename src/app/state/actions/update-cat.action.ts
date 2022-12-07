import { createAction, props } from "@ngrx/store";
import { Cat } from "src/app/models/cat.model";

 
export const initUpdateCat = createAction(
  '[Update Cat] Init Update Cat',
);
 
export const updateCat = createAction(
  '[Update Cat] Update Cat',
    props<{ cat: Cat }>()
);
 
export const UpdateCatSuccess = createAction(
  '[Update Cat] Update Cat Success',
);