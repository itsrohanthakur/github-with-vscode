import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
 
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers:[DataServiceService]
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private service:DataServiceService) {
   }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        name: new FormControl(),
        age: new FormControl(),
        // nested form group
        job: new FormGroup({
          company: new FormControl(),
          skill: new FormControl()
        })
      }
    )
  }
  logToConsole(){
    console.log(this.loginForm.value);
  }
  getCustomer(){
    this.service.getCustomers();
  }
}
