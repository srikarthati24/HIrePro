import { Component, OnInit } from '@angular/core';
import { jobpostingmodel } from '../model/jobpostig.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EndpointsService } from '../services/endpoint.service';
@Component({
  selector: 'app-jobposting',
  templateUrl: './jobposting.component.html',
  styleUrls: ['./jobposting.component.css']
})
export class JobpostingComponent implements OnInit {
  jobposting:string;
  jobrole:string;
  joblocaion:string;
  description:string;
  responsibilties:string;
  qualification:string;
  res:any;
  constructor(  
    private service:EndpointsService,
  ) { }

  ngOnInit(): void {
  }
  onsaveclick(){
    let post :jobpostingmodel ={
      JobPosition :this.jobposting,
      JobLocation:this.joblocaion,
      JobRole:this.jobrole,
      Description:this.description,
      Responsibilites:this.responsibilties,
      Qualification:this.qualification
    }
    this.service.Addpost(post).subscribe( data=>{
      alert("successfull");
    });
  }
  Clear(){
    this.jobposting ="";
    this.joblocaion ="";
    this.jobrole ="";
    this.description ="";
    this.responsibilties ="";
    this.qualification ="";
  }
}
