import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private serviceUrl = "https://localhost:44316/api";
  customers: any;
  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(this.serviceUrl + "/Customers");

  }
  getAllEmp(): Observable<any>{
    return this.http.get(this.serviceUrl + "/employees");
  }
  getEmpById(id){
    return this.http.get(this.serviceUrl + '/employees/'  + id);
  }
  authUser(credentials){
    return this.http.post(this.serviceUrl +'/auth/login' , credentials);
  }

}
