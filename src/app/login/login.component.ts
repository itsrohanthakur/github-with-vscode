import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:DataServiceService) { }

  ngOnInit() {
  }
  signIn() {
    
    this.authService.authUser({'UserName':'mosh@domain.com', 'Password':'1234'})
      .subscribe(result => { 
       console.log(result);
      });
  }

}
