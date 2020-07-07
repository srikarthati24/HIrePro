import { Component, OnInit } from '@angular/core';
import { usermodel } from '../model/jobpostig.model';
import { EndpointsService } from '../services/endpoint.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  fullname:string;
  desgination:string;
  email:string;
  mobileno:string;
  password:string;
  createpassword:string;
  accesslevel:string;
  confirmpassword:string;
  constructor(private _end:EndpointsService) { }

  ngOnInit(): void {
  }
  onsaveclick(){
    debugger;
    let create:usermodel ={
     Name:this.fullname,
     Designation:this.desgination,
     Email:this.email,
     AccessLevel:this.accesslevel,
     Mobile:this.mobileno,
     Password:this.createpassword
    }
    this._end.CreateUser(create).subscribe(data =>{
      this.Clear();
      alert('insert successfull');

    });
  }
  Clear(){
    this.fullname ="";
    this.desgination ="";
    this.email ="";
    this.mobileno ="";
    this.password ="";
    this.createpassword ="";
    this.accesslevel ="";
  }
}
