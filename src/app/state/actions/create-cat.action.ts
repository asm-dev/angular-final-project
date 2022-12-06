import { createAction, props } from "@ngrx/store";
import { Cat } from "src/app/models/cat.model";

 
export const initCreateCat = createAction(
  '[Create Cat] Init Create Cat',
);
 
export const createCat = createAction(
  '[Create Cat] Create Cat',
    props<{ cat: Cat }>()
);
 
export const createCatSuccess = createAction(
  '[Create Cat] Create Cat Success',
);