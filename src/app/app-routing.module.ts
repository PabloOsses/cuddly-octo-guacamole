import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BodyComponent} from '../app/body/body.component';
import {NotasComponent} from '../app/notas/notas.component'
const routes: Routes = [
  {path:"",component:BodyComponent},
  {path:"notas",component:NotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
