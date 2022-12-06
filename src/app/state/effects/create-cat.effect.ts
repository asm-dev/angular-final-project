import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CatsAPIService } from "src/app/services/cats-api.service";
import { createCat, createCatSuccess } from "../actions/create-cat.action";

@Injectable()
export class CreateCatEffects {
  constructor(
    private actions$: Actions,
    private catAPIservice: CatsAPIService
  ) {}
 
  createApartment$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createCat),
      mergeMap(action => this.catAPIservice.createCat(action.cat) // Create the apartment
        .pipe(
          map(result => createCatSuccess() // dispatch the createApartmentSuccess action
          )
        ),
      )
    );
   
  });
}