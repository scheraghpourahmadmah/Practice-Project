import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Manufactor } from '../_models/manufactor';
import { CarService } from '../_services/car.service';
import { ManufactorService } from '../_services/manufactor.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  carform: FormGroup = new FormGroup({});
  manufactors:Manufactor[]= [];
  constructor(private cfb: FormBuilder,private carService : CarService,private router: Router, 
    private manufactorService: ManufactorService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.getManufactors();
  }


  getManufactors(){
    this.manufactorService.getManufactors().subscribe({
      next:response => {
        this.manufactors = response;
      },
     error: error => console.log(error)
    })
  }


  initializeForm() {
    this.carform = this.cfb.group({
      name :[''],
      price : [''],
      color:[''],
      year:[''],
      manufactorId: ['']
    });
  }

  createNewCar(){
    this.carService.createNewCar(this.carform.value).subscribe({
     next: () => {
       this.router.navigateByUrl('/car')
     }
    });
   }

}
