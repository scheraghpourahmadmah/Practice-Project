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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ManufactorComponent,
    HomeComponent,
    CreateManufactorComponent,
    EditManufactorComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
