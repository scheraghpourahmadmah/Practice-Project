import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../_models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  baseUrl= 'http://localhost:5012/api/';

  constructor(private http: HttpClient) { }
  
  getCars(){
    return this.http.get<Car[]>(this.baseUrl + 'car');
  }

  createNewCar(car:Car){
    return this.http.post(this.baseUrl + 'car/addCar', car);
  }

  deleteCar(id:number){
    return this.http.delete(this.baseUrl + 'car/' + 'deleteCar/' + id );
  }

  editCar(car: Car){
    return this.http.put(this.baseUrl + 'car/editCar', car);
  }

  getCar(id:number){
    return this.http.get<Car>(this.baseUrl + 'car/' + id);
  }
}