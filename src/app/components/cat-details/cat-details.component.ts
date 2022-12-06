import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';
import { Observable } from 'rxjs';
import { selectCat } from 'src/app/state/selectors/cat-details.selector';
import { loadingCat } from 'src/app/state/actions/cat-details.action';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit{
  id: number;
  cat$: Observable<Cat>;
 
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.id = 0;
    this.cat$ = new Observable<Cat>();
  }
 
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.cat$ = this.store.select(selectCat);
    this.store.dispatch(loadingCat({ id: this.id }));
  }
 
  goBack(): void {
    this.router.navigate(['/']);
  }
}
