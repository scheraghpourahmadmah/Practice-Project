import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManufactorService } from '../_services/manufactor.service';

@Component({
  selector: 'app-create-manufactor',
  templateUrl: './create-manufactor.component.html',
  styleUrls: ['./create-manufactor.component.css']
})
export class CreateManufactorComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private manufactorService: ManufactorService , private router: Router) { }

  ngOnInit(): void {
   this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      name :['']
    });
  }

  createNewManufactor(){
   this.manufactorService.createNewManufactor(this.form.value).subscribe({
    next: () => {
      this.router.navigateByUrl('/manufactor')
    }
   });
  }

}
