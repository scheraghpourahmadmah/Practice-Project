import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css']
})
export class CreateCarComponent implements OnInit {
  carform: FormGroup = new FormGroup({});
  constructor(private cfb: FormBuilder,private carService : CarService,private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() {
    this.carform = this.cfb.group({
      name :[''],
      price : [''],
      color:[''],
      year:[''],
      manufactorName: ['']
    });
  }

  createNewCar(){
    this.carService.createNewCar(this.carform.value).subscribe({
     next: () => {
       this.router.navigateByUrl('/manufactor')
     }
    });
   }

}
