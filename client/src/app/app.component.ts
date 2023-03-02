import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auto Gallery';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:5012/api/manufactor').subscribe({
      next: response => {
        console.log(response);
        this.users = response;
      },
      error: error => console.log(error),
      complete: () => console.log('Request has completed') 
    })
      }
  
}
