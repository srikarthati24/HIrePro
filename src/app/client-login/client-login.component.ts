import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-login',
  templateUrl: './client-login.component.html',
  styleUrls: ['./client-login.component.css']
})
export class ClientLoginComponent implements OnInit {

  constructor() { }
   userName:string;
   passwords:string;
  ngOnInit(): void {
  }
  onsaveclick(){
    if(this.userName =="srikar" && this.passwords =="1234"){
      alert('client login successfull');
    }

  }
}
