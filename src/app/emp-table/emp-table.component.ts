import { DataServiceService } from './../data-service.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { EmpTableDataSource } from './emp-table-datasource';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.scss']
})
export class EmpTableComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: EmpTableDataSource;

  constructor(private service: DataServiceService) {

  }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['jobTitle', 'nationalIdnumber', 'birthDate', 'gender'];

  ngOnInit() {
    this.dataSource = new EmpTableDataSource(this.paginator, this.sort, this.service);
    this.dataSource.loadData();
  }
  ngAfterViewInit() {
    this.paginator.page.pipe(tap(() => {
      this.dataSource.loadData();
    }))
  }
}
