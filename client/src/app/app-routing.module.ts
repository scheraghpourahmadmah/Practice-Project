import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateManufactorComponent } from './create-manufactor/create-manufactor.component';
import { EditManufactorComponent } from './edit-manufactor/edit-manufactor.component';
import { HomeComponent } from './home/home.component';
import { ManufactorComponent } from './manufactor/manufactor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manufactor', component: ManufactorComponent },
  { path: 'createManufactor', component: CreateManufactorComponent },
  { path: 'editManufactor/:id', component: EditManufactorComponent },
  {path: 'car', component: CarComponent},
  { path: 'createCar', component: CreateCarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
