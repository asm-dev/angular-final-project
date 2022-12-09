import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Cat } from 'src/app/models/cat.model';
import { Observable } from 'rxjs';
import { selectCat } from 'src/app/state/selectors/cat-details.selector';
import { loadingCat } from 'src/app/state/actions/cat-details.action';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { CatsAPIService } from 'src/app/services/cats-api.service';


@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class CatDetailsComponent implements OnInit{
  id: number;
  cat$: Observable<Cat>;
 
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router,
    private catsAPI: CatsAPIService,
  ) {
    this.id = 0;
    this.cat$ = new Observable<Cat>();
  }
 
  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.cat$ = this.store.select(selectCat);
    this.store.dispatch(loadingCat({ id: this.id }));
    // let rule: CSSStyleSheet = document.styleSheets[2];
    // let bodyRule: any = rule.cssRules.item(717);
    // console.log(bodyRule.style);
    // bodyRule.style.overflow = 'hidden';
  }
 
  goBack(): void {
    this.router.navigate(['/']);
  }

  deleteCat(): void {
    this.catsAPI.deleteCatById(this.id).subscribe();
    this.router.navigate(['/'])  
  }
}
