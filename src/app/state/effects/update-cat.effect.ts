import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CatsAPIService } from "src/app/services/cats-api.service";
import { updateCat, UpdateCatSuccess } from "../actions/update-cat.action";

@Injectable()
export class UpdateCatEffects {
  constructor(
    private actions$: Actions,
    private catAPIservice: CatsAPIService
  ) {}
 
  updateCat$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateCat),
      mergeMap(action => this.catAPIservice.updateCat(action.cat) // UPDATE Create the cat
        .pipe(
          map(result => UpdateCatSuccess() // dispatch the updateeCatSuccess action
          )
        ),
      )
    );
   
  });
}