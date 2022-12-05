import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cat } from 'src/app/models/cat.model';
import { loadCats, loadingCats } from 'src/app/state/actions/cats-list.action';
import { AppState } from 'src/app/state/app.state';
import { CatsAPIService } from 'src/app/services/cats-api.service';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.css']
})
export class CatsListComponent implements OnInit{
  loading$: Observable<boolean>;
  cats$: Observable<Cat[]>;

  constructor(
    private store: Store<AppState>,
    private catsAPIService: CatsAPIService
  ) {
    this.loading$ = new Observable<boolean>();
    this.cats$ = new Observable<Cat[]>();
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(state => state.catStates.loading);
    this.cats$ = this.store.select(state => state.catStates.cats);

    this.store.dispatch(loadingCats())

    this.catsAPIService.getCats().subscribe(cats => { 
      this.store.dispatch(loadCats({cats}))
    }) 
  }
}