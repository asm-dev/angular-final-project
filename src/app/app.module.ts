import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCatComponent } from './components/create-cat/create-cat.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ROOT_REDUCERS } from './state/app.state';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CatsEffects } from './state/effects/cats.list.effect';
import { CatDetailsEffects } from './state/effects/cat-details.effect';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { CreateCatEffects } from './state/effects/create-cat.effect';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCatComponent,
    NavBarComponent,
    CatDetailsComponent,
    ErrorPageComponent,
    CatsListComponent,
    UpdateCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([CatsEffects,CatDetailsEffects, CreateCatEffects]),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
