import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, take } from 'rxjs';
import { Cat } from 'src/app/models/cat.model';
import { createCat, initCreateCat } from 'src/app/state/actions/create-cat.action';
import { AppState } from 'src/app/state/app.state';
import { selectCreateCatSuccess } from 'src/app/state/selectors/create-cat.selector';

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
    this.breedInput = new FormControl('', [Validators.required]);
    this.breedOriginInput = new FormControl('', [Validators.required]);
    this.vocalisationInput = new FormControl('', [Validators.required]);
    this.dogFriendlyInput = new FormControl('', [Validators.required]);
    this.affectionInput = new FormControl('', [Validators.required]);
    
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
