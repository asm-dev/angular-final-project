import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';
import { createCat, initCreateCat } from 'src/app/state/actions/create-cat.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateCatSuccess } from 'src/app/state/selectors/create-cat.selector';
import { CustomValidators } from 'src/app/utils/custom-validator';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.css']
})
export class CreateCatComponent  implements OnInit{

  createCatSuccess$: Observable<boolean>;
 
  createForm: FormGroup;
  imgInput: FormControl;
  breedInput: FormControl;
  breedOriginInput: FormControl;
  vocalisationInput: FormControl;
  dogFriendlyInput: FormControl;
  affectionInput: FormControl;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {
    this.createCatSuccess$ = new Observable();
 
    this.imgInput = new FormControl('', [Validators.required]);
    this.breedInput = new FormControl('', [Validators.required, CustomValidators.noShaunonian,]); //There are only 2 Shaunonian cats in the world
    this.breedOriginInput = new FormControl('', [Validators.required, Validators.maxLength(56),]); //The United Kingdom of Great Britain and Northern Ireland
    this.vocalisationInput = new FormControl('', [Validators.required, CustomValidators.validLevel(0,5),]);
    this.dogFriendlyInput = new FormControl('', [Validators.required, CustomValidators.validLevel(0,5),]);
    this.affectionInput = new FormControl('', [Validators.required, CustomValidators.validLevel(0,5),]);
    
    this.createForm = new FormGroup({
      img: this.imgInput,
      breed_name: this.breedInput,
      breed_origin: this.breedOriginInput,
      vocalisation: this.vocalisationInput,
      dog_friendly: this.dogFriendlyInput,
      affection_level: this.affectionInput,  
    });

  }
 
  ngOnInit(): void {
    this.createCatSuccess$ = this.store.select(selectCreateCatSuccess);
    this.store.dispatch(initCreateCat());
  }
 
  createCat(): void {
    this.createForm.value.editable = true;
   
    // Create cat
    this.store.dispatch(createCat({ cat: this.createForm.value}));
 
    // Check if cat was created
    this.createCatSuccess$.subscribe(success => {
      if (success) {
        alert('Cat added successfully!');
        // Navigate to home
        this.router.navigate(['/']);
      } else {
        console.log('fail');
      }
    });
  }
}
