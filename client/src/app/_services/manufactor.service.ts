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
  deleteManufactor(manufactorId:number){
    // return this.http.delete('http://localhost:5012/api/manufactor/deleteManufactor/' + manufactorId);
    return this.http.delete(this.baseUrl + 'manufactor/' + 'deleteManufactor/' + manufactorId );
  }

  createNewManufactor(manufactor: Manufactor) {
    return this.http.post(this.baseUrl + 'manufactor/addManufactor', manufactor);
  }

  editManufactor(manufactor: Manufactor){
    return this.http.put(this.baseUrl + 'manufactor/editManufactor', manufactor);
  }
}
