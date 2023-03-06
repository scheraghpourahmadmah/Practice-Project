import { Component, OnInit } from '@angular/core';
import { Manufactor } from '../_models/manufactor';
import { ManufactorService } from '../_services/manufactor.service';

@Component({
  selector: 'app-manufactor',
  templateUrl: './manufactor.component.html',
  styleUrls: ['./manufactor.component.css']
})
export class ManufactorComponent implements OnInit {

  manufactors:Manufactor[]= [];
  constructor(private manufactorService: ManufactorService) { }

  ngOnInit(): void {
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

  deleteManufactor(id:number){
    this.manufactorService.deleteManufactor(id).subscribe({
      next: () =>{
        this.getManufactors();
      }
    })
  }

}