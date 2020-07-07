import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
export interface PeriodicElement {
  // name: string;
   id: number;
  // weight: number;
  // symbol: string;
  Name :string;
  JobPosting:string;
  Location:string;
  Status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id:1,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:2,Name:'conrad', JobPosting:'Developer', Location:'Mumbai', Status:'Selected'},
  {id:3,Name:'umesh', JobPosting:'Developer', Location:'Chenai', Status:'Selected'},
  {id:4,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:5,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:6,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:7,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:8,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:9,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
  {id:10,Name:'srikar', JobPosting:'Developer', Location:'Hyderabad', Status:'Selected'},
];

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {
  displayedColumns: string[] = ['id','Name', 'JobPosting', 'Location', 'Status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  //   this.dataSource.filterPredicate = 
  // (data: PeriodicElement, filtersJson: string) => {
  //     const matchFilter = [];
  //     const filters = JSON.parse(filtersJson);

  //     filters.forEach(filter => {
  //       const val = data[filter.id] === null ? '' : data[filter.id];
      }
    }    
