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
}