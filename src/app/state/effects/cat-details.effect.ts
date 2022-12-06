import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CatsAPIService } from "src/app/services/cats-api.service";
import { loadCat, loadingCat } from "../actions/cat-details.action";
 
@Injectable()
export class CatDetailsEffects {
  constructor(
    private actions$: Actions,
    private catbAPIService: CatsAPIService
  ) {}
 
  loadingCat$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingCat),
      mergeMap(action => this.catbAPIService.getCatById(action.id) // return the data from the API
        .pipe( // success case
          map(cat => loadCat({ cat }) // dispatch the loadApartment action
          )
        ),
      )
    );
  });
}