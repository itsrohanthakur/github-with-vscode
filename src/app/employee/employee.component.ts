import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from './../data-service.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit ,AfterViewInit  {
  displayedColumns: string[] = ['jobTitle', 'nationalIdnumber', 'birthDate', 'gender'];
  dataSource= new MatTableDataSource<any>();
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private service: DataServiceService ,private route: ActivatedRoute) { }
 
 
  ngOnInit() { 
  this.service.getAllEmp().subscribe(res => {this.dataSource =new MatTableDataSource(res);
 });
  this.route.queryParamMap.subscribe(optparam => console.log(optparam.getAll));
  }
  ngAfterViewInit(){
  
  }
  getAllEmp(){
  this.service.getAllEmp().subscribe(res => this.dataSource =res);
  }
  getEmpById(id){
    // this.service.getEmpById(id).subscribe(res => this.dataSource =res);
  }

}
