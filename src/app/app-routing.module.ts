import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';
import { CreateCatComponent } from './components/create-cat/create-cat.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { UpdateCatComponent } from './components/update-cat/update-cat.component';

const routes: Routes = [
  {
    path:"",
    component: CatsListComponent
  },
  {
    path: 'cats/create',
    component: CreateCatComponent
  },
  {
    path: 'cats/update/:id',
    component: UpdateCatComponent
  },
  {
    path: 'cats/:id',
    component: CatDetailsComponent
  },
  {
    path: "**", // 404 Page
    component: ErrorPageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
