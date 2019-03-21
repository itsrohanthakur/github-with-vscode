import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    Observable.combineLatest([
    this.route.paramMap,
    this.route.queryParamMap]).subscribe(
      combine => console.log(combine)
    )
    

  }
 
}
