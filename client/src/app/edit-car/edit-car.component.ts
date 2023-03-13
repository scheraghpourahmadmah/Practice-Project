import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../_models/car';
import { Manufactor } from '../_models/manufactor';
import { CarService } from '../_services/car.service';
import { ManufactorService } from '../_services/manufactor.service';

@Component({
  selector: 'app-edit-car',
  templateUrl: './edit-car.component.html',
  styleUrls: ['./edit-car.component.css']
})
export class EditCarComponent implements OnInit {

  editCarform: FormGroup = new FormGroup({});
  id : number | undefined;
  car?:Car;
  manufactors:Manufactor[]= [];
  constructor(private cfb: FormBuilder,private carService : CarService,private route: ActivatedRoute,private router: Router,
    private manufactorService: ManufactorService) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.initializeForm();
    this.getCar();
    this.getManufactors();
  }

  initializeForm() {
    this.editCarform = this.cfb.group({
    name :[''],
    id:[''],
    price : [''],
    color:[''],
    year:[''],
    manufactorId: ['']
  });
  }

  getCar(){
    if(this.id) {
      this.carService.getCar(this.id).subscribe({
        next:response => {
          this.car = response;
          this.editCarform.patchValue(this.car);
        },
       error: error => console.log(error)
      })
    }
  }
  getManufactors(){
    this.manufactorService.getManufactors().subscribe({
      next:response => {
        this.manufactors = response;
      },
     error: error => console.log(error)
    })
  }
  editCar(){
    this.carService.editCar(this.editCarform.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/car')
      }
     });
  }
}
