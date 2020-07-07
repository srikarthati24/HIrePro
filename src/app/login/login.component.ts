import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(    private router: Router,
    public route : ActivatedRoute
) { }
userName:string;
passwords:string;

  ngOnInit(): void {
  }
  onsaveclick()
  {
  if(this.userName == 'conrad' && this.passwords == '1234'){
    alert("sucess");
    this.router.navigate(["/main"]);
  }
  else if(this.userName == 'srikar' && this.passwords == '1234'){
    alert("sucess");
    this.router.navigate(["/custom"]);
  }
  else{
    alert("Please verify the login details");
  }
 
}
onnewuser(){
  this.NavigateClick();
}
  NavigateClick()
  {
     this.router.navigate(["/register"]);
  }

}
