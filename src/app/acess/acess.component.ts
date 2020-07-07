import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DailogBoxComponent } from '../Shared/dailog-box/dailog-box.component';
import { EndpointsService } from '../services/endpoint.service';



export interface UsersData {
  id:number;
  name: string;
  Designation: string;
  EmailAddress: string;
  AccessLevel: string;
}

// const ELEMENT_DATA: UsersData[] = [
//   {id:1 ,name: 'srikar', Designation:'Dev', EmailAddress:'srikar@gmail.com',AccessLevel:'Hiring'}
// ];

@Component({
  selector: 'app-acess',
  templateUrl: './acess.component.html',
  styleUrls: ['./acess.component.css']
})


export class AcessComponent implements OnInit {
  displayedColumns: string[] = ['id' ,'name', 'Designation', 'EmailAddress', 'AccessLevel', 'action'];
  dataSource:any;
  // = ELEMENT_DATA;

  @ViewChild(MatTable,{static:true}) table: MatTable<any>;

  constructor(
    public dialog: MatDialog,
    public _end:EndpointsService) {

    }
  ngOnInit(): void {
    this._end.GetAccess().subscribe(data =>{
      this.dataSource =data;
    })
  }



  openDialog(action,obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DailogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      Designation:row_obj.Designation,
      EmailAddress:row_obj.EmailAddress,
      AccessLevel:row_obj.AccessLevel
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
        value.Designation =row_obj.Designation;
        value.EmailAddress = row_obj.EmailAddress;
        value.AccessLevel = row_obj.AccessLevel;
      }
      return true;
    });
  }
  deleteRowData(row_obj){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
}