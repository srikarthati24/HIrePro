import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EndpointsService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-jobpostlist',
  templateUrl: './jobpostlist.component.html',
  styleUrls: ['./jobpostlist.component.css']
})
export class JobpostlistComponent implements OnInit {
  displayedColumns: string[] = ['jobposting','Location', 'Date', 'Status', 'Approve' ];
  dataSource;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(public _end:EndpointsService,private cdr: ChangeDetectorRef,) { }

  ngOnInit() { 
    this.getitems();
    this.cdr.detectChanges();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }    

  getitems(){
    this._end.getusers().subscribe(data =>{
      this.dataSource =data;
      console.log(this.dataSource);
    })
  }
  //Description
  //JobLocation
  //JobPosition
  //JobRole
  //Qualification
  //Responsibilites
  //DatePosted
  approve(){
    alert("Approve");
  }
  deny(){
    alert("deny");
  }
}
