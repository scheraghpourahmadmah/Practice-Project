import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Manufactor } from '../_models/manufactor';
import { ManufactorService } from '../_services/manufactor.service';

@Component({
  selector: 'app-edit-manufactor',
  templateUrl: './edit-manufactor.component.html',
  styleUrls: ['./edit-manufactor.component.css']
})
export class EditManufactorComponent implements OnInit {
  manufactor:Manufactor | undefined;
  id : number | undefined;
  editManufactorform: FormGroup = new FormGroup({});
  constructor(private manufactorService: ManufactorService,private route: ActivatedRoute,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getManufactor();
    this.initializeForm();
  }
  initializeForm() {
    this.editManufactorform = this.fb.group({
      name :[''],
      id:['']
    });
  }

  getManufactor(){
    if(this.id) {
      this.manufactorService.getManufactor(this.id).subscribe({
        next:response => {
          this.manufactor = response;
          this.editManufactorform.patchValue(this.manufactor);
        },
       error: error => console.log(error)
      })
    }
   
  }

  editManufactor(){
    this.manufactorService.editManufactor(this.editManufactorform.value).subscribe({
      next: () => {
        this.router.navigateByUrl('/manufactor')
      }
     });
  }

}
