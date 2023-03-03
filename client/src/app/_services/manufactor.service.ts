import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Manufactor } from '../_models/manufactor';

@Injectable({
  providedIn: 'root'
})
export class ManufactorService {
  baseUrl= 'http://localhost:5012/api/';

  constructor(private http: HttpClient) { }

  getManufactors(){
    return this.http.get<Manufactor[]>(this.baseUrl + 'manufactor');
  }
}
