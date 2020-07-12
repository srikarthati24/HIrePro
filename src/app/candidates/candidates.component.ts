import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CandidatesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Id','Name', 'Jobpostion', 'Location', 'Status','View Details'];
  expandedElement: PeriodicElement | null;
}

export interface PeriodicElement {
 Id:number;
 Name:string;
 Jobpostion:string;
 Location:string;
 Status:string;
 description:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    Id:1,
    Name:'srikar',
    Jobpostion:'developer',
    Location:'hyderabad',
    Status:'pending',
    description:''

  }, {
    Id:2,
    Name:'Ashok',
    Jobpostion:'developer',
    Location:'hyderabad',
    Status:'confirm',
    description:''
  }, {
    Id:3,
    Name:'mohan',
    Jobpostion:'senior developer',
    Location:'hyderabad',
    Status:'pending',
    description:''
  }, {
    Id:4,
    Name:'conrad',
    Jobpostion:'manger',
    Location:'hyderabad',
    Status:'pending',
    description:''
  }
];

