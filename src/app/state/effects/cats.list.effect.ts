import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs";
import { CatsAPIService } from "src/app/services/cats-api.service";
import { loadCats, loadingCats } from "../actions/cats-list.action";

@Injectable()
export class CatsEffects {
  constructor(
    private actions$: Actions,
    private catsAPIService: CatsAPIService
  ) {}
 
  loadingCats$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadingCats), // when this accion is dispached
      mergeMap(() => this.catsAPIService.getCats() // return the data from the API
        .pipe( // success case
          map(cats => loadCats({ cats }), // dispatch the loadApartments action
          )
        ),
      )
    );
  });
}