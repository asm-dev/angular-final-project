import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Cat } from 'src/app/models/cat.model';
import { loadingCat } from 'src/app/state/actions/cat-details.action';
import { AppState } from 'src/app/state/app.state';
import { selectCat } from 'src/app/state/selectors/cat-details.selector';
import { updateCat, initUpdateCat } from 'src/app/state/actions/update-cat.action';
import { selectUpdateCatSuccess } from 'src/app/state/selectors/update-cat.selector';
import { Observable, take } from 'rxjs';


@Component({
  selector: 'app-update-cat',
  templateUrl: './update-cat.component.html',
  styleUrls: ['./update-cat.component.css']
})
export class UpdateCatComponent implements OnInit {

  updateCatSuccess$: Observable<boolean>;

  id:number;
  editForm: FormGroup;
  imgInput: FormControl;
  breedInput: FormControl;
  breedOriginInput: FormControl;
  vocalisationInput: FormControl;
  dogFriendlyInput: FormControl;
  affectionInput: FormControl;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.updateCatSuccess$ = new Observable();

    this.imgInput = new FormControl('', [Validators.required]);
    this.breedInput = new FormControl('', [Validators.required]);
    this.breedOriginInput = new FormControl('', [Validators.required]);
    this.vocalisationInput = new FormControl('', [Validators.required]);
    this.dogFriendlyInput = new FormControl('', [Validators.required]);
    this.affectionInput = new FormControl('', [Validators.required]);
    this.id = 0;
    
    this.editForm = new FormGroup({
      img: this.imgInput,
      breed_name: this.breedInput,
      breed_origin: this.breedOriginInput,
      vocalisation: this.vocalisationInput,
      dog_friendly: this.dogFriendlyInput,
      affection_level: this.affectionInput,  
    });
 
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.store.dispatch(loadingCat({ id: this.id }));
    this.store.select(selectCat).subscribe((cat) => {
      if(cat){
        this.editForm.patchValue({
          img: cat.img,
          breed_name: cat.breed_name,
          breed_origin: cat.breed_origin,
          vocalisation: cat.vocalisation,
          dog_friendly: cat.dog_friendly,
          affection_level: cat.affection_level, 
        })
      }
    })

    this.updateCatSuccess$ = this.store.select(selectUpdateCatSuccess);
    this.store.dispatch(initUpdateCat());

  }

  
  updateCat(): void {

    this.editForm.value.id = this.id;
    this.editForm.value.editable = true;
    
    this.store.dispatch(updateCat({ cat: this.editForm.value}));
    
    // Check if cat was updated
    this.updateCatSuccess$.subscribe(success => {
      if (success) {
        alert('Cat updated successfully!');
        // Navigate to home
        this.router.navigate(['/']);
      } else {
        console.log('fail');
      }
    });
 
  };

}
