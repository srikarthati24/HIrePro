import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { jobpostingmodel, usermodel } from '../model/jobpostig.model';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class EndpointsService {
  Baseurl ="http://api.hire-pro.com/api/HirePro/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http : HttpClient,
    public route : ActivatedRoute){

  }

  public Addpost (post:jobpostingmodel){
    return this.http.post(`${this.Baseurl+"SaveJobPost"}`,post);
  }
  public CreateUser(create:usermodel){
    return this.http.post(`${this.Baseurl+"CreateUser"}`,create)
  }
  public GetAccess (){
    return this.http.get(`${this.Baseurl+"GetAccessRoles"}`);
  }
  public getusers(){
    return this.http.get(`${this.Baseurl+"GetJobPostList"}`);
  }
} 