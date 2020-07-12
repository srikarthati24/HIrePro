import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-technician',
  templateUrl: './technician.component.html',
  styleUrls: ['./technician.component.css']
})
export class TechnicianComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  descripton:string;
  responsibilities:string;
  qualifications:string;
  exprince:string;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.descripton=""; 
    this.responsibilities="Perform work specified on the repair order with efficiency and in accordance with"+
    "dealership policies and procedures."+
    "Test-drive vehicles, and test components and systems, using diagnostic tools and"+
    "special service equipment."+
    "Diagnose, maintain, and repair vehicle automotive systems including engine,"+
    "transmission, electrical steering, suspension, brakes, air conditioning, etc. ";
    this.qualifications="5+ years of Service Technician experience required"+
    "ASE Certification required"+
    "A-level qualifications, including Diagnostic, Electrical and Engine Repair, specific"+
    "to Chrysler and/or Toyota (stongly encouraged, not required)"+
    "Broad knowledge of new vehicle technologies"+
    "Ambitious, hardworking presence in a team environment"+
    "We are an equal opportunity employer and prohibit discrimination/harassment without regard"+
    "to race, color, religion, age, sex, national origin, disability status, genetics, protected veteran"+
    "status, sexual orientation, gender identity or expression, or any other characteristic protected"+
    "by federal, state or local laws";
    this.exprince ="Please list the names of your present and/or previous employers in chronological order"+
    "with present or most recent employer listed first"+
    "Provide for at least the most recent (10 year ) period."
  }
}