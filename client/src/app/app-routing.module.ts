import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateManufactorComponent } from './create-manufactor/create-manufactor.component';
import { HomeComponent } from './home/home.component';
import { ManufactorComponent } from './manufactor/manufactor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manufactor', component: ManufactorComponent },
  { path: 'createManufactor', component: CreateManufactorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
