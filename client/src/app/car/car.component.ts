import { Component, OnInit } from '@angular/core';
import { Car } from '../_models/car';
import { CarService } from '../_services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]= [];
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    this.carService.getCars().subscribe({
      next:response => {
        this.cars = response;
      },
     error: error => console.log(error)
    })
  }

}
