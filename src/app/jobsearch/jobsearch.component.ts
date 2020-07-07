import { Component, OnInit } from '@angular/core';
export interface data{
  jobname:string,
  Location:string
}
const Element:data[]=[
];
@Component({
  selector: 'app-jobsearch',
  templateUrl: './jobsearch.component.html',
  styleUrls: ['./jobsearch.component.css']
})
export class JobsearchComponent implements OnInit {
  displayedColumns =['jobname','Location','Approve'];
  dataSource;
  constructor() { }

  ngOnInit(): void {
  }

}
