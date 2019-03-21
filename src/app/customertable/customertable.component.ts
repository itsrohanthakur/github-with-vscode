// import  Customer  from 'src/app/Models/Customer';
import { DataServiceService } from './../data-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-customertable',
  templateUrl: './customertable.component.html',
  styleUrls: ['./customertable.component.scss']
})
export class CustomertableComponent implements OnInit {
  ELEMENT_DATA:any;
  constructor(private service:DataServiceService) { }
  displayedColumns: string[] = ['accountNumber', 'store', 'person', 'territory'];
  dataSource = [];
  ngOnInit() {
    this.service.getCustomers().subscribe(res => {this.dataSource= res; console.log(this.dataSource)});
  }
  getData(){
    this.service.getCustomers().subscribe(res => this.ELEMENT_DATA= res.json());
   
  }


}
