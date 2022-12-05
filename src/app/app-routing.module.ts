import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsListComponent } from './components/cats-list/cats-list.component';

const routes: Routes = [
  {
    path:"",
    component: CatsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
