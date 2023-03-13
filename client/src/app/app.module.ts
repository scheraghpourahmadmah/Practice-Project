import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { ManufactorComponent } from './manufactor/manufactor.component';
import { HomeComponent } from './home/home.component';
import { CreateManufactorComponent } from './create-manufactor/create-manufactor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditManufactorComponent } from './edit-manufactor/edit-manufactor.component';
import { CarComponent } from './car/car.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ManufactorComponent,
    HomeComponent,
    CreateManufactorComponent,
    EditManufactorComponent,
    CarComponent,
    CreateCarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
