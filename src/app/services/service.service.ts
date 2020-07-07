import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Service {
    Baseurl = 'http://localhost:61843/';
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    constructor(
        private http : HttpClient,
        public route : ActivatedRoute
        ){ }

        public Adddjobposting(post)
        {
          return this.http.post(`${this.Baseurl+"jobposting"}`,post);
        }
}