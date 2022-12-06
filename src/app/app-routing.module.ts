import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatDetailsComponent } from './components/cat-details/cat-details.component';
import { CatsListComponent } from './components/cats-list/cats-list.component';

const routes: Routes = [
  {
    path:"",
    component: CatsListComponent
  },
  {
    path: 'cats/:id',
    component: CatDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
