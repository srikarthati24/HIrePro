// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import {  Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class HttpGatewayService {


//   constructor(private _http: HttpClient) { }

//   GET(url):Observable<any>{
//     return this._http.get(url);
//   }

//   _GET(url, data): Observable<any> {
//     return this._http.get(url, { params: data });
//   }

//   _POST(url, body): Observable<any> {
//     return this._http.post(url, body);
//   }
 

//   _PUT(url, data): Observable<any> {
//     return this._http.put(url, data);
//   }

//   _DELETE(url, data): Observable<any> {
//     //return this._http.delete(url, data);
//     return this._http.request('delete', url, { body: data});
//   }

//   _UPLOAD(url,data): Observable<any> {
//     //return this._http.delete(url, data);
//     return this._http.request('post', url, { body: data});
//   }
//   _UPLOADFile(url,data): Observable<any> {
//     //return this._http.delete(url, data);
//     return this._http.request('post', url, { body: data});
//   }
//   UPLOADFileWithData(url,data): Observable<any> {
//     //return this._http.delete(url, data);
//     return this._http.request ('post', url, { body: data});
//   }
// }