import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { FormService } from './form.service';
import { TableService } from '../employee-table/table.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  allUsers = [];
  Name ='';
  UserName = '';
  EmployeeID ='';
  CompanyName ='';
  CompanyCatchPhrase = '';
  Phone ='';
  Email ='';
  Website ='';
  employeeObj : Employee;
  modalRef: BsModalRef;
  constructor(
    private tableHttp: TableService,
    private http: FormService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.tableHttp.getUsers().subscribe(
      (res: any) => {
        this.allUsers = res;
      },
      err => {
        console.log(err);
      }
    );
  }

  deleteUser(user){
    this.http.deleteUser(user).subscribe(
      (res:any)=>{
        console.log("success");
        this.allUsers.splice(this.allUsers.findIndex( alluser => alluser.id === user.id),1);
      },
      err => {
        console.log(err);
      }
    );
  }

  AddOrUpdateUser(){  
    let index = this.allUsers.findIndex( user => user.id === this.EmployeeID);
    console.log(index);
    if(index === -1)
    {
      this.employeeObj = {
        name: this.Name,
        username: this.UserName,
        email: this.Email,
        phone: this.Phone,
        //id: this.allUsers.length+1,
        website: this.Website,
        company:{
          name: this.CompanyName,
          catchPhrase: this.CompanyCatchPhrase
        }
      };
      this.http.addUser(this.employeeObj).subscribe(
        (res: Employee) => {
          console.log(res);
          this.allUsers.unshift(res);
        },
        err => {
          console.log(err);
        }
      );
    }
    else{
      this.http.updateUser(this.allUsers[index]).subscribe(
        (res:any)=>{
          console.log(res);
          this.allUsers[index].name = this.Name;
          this.allUsers[index].username = this.UserName;
          this.allUsers[index].company.name = this.CompanyName;
          this.allUsers[index].company.catchPhrase = this.CompanyCatchPhrase;
          this.allUsers[index].phone = this.Phone;
          this.allUsers[index].email = this.Email;
          this.allUsers[index].website = this.Website;
        },
        err => {
          console.log(err);
        }     
      );
    }
    this.modalRef.hide();  
  }

  openModal(template: TemplateRef<any>,user) {
    this.Name = user.name;
    this.UserName = user.username;
    this.CompanyName = user.company.name;  
    this.CompanyCatchPhrase = user.company.catchPhrase;
    this.EmployeeID =user.id;
    this.Phone = user.phone;
    this.Email = user.email;
    this.Website = user.website;
    this.modalRef = this.modalService.show(template);

  }

  NewModal(template: TemplateRef<any>) {
    this.Name = "";
    this.UserName = "";
    this.CompanyName = "";
    this.CompanyCatchPhrase = "";
    this.EmployeeID = "";
    this.Phone = "";
    this.Email = "";
    this.Website = "";
    this.modalRef = this.modalService.show(template);
  }
}


interface Employee {
  name: string;
  username: string;
  email: string;
  phone: string;
  //id: number;
  website: string;
  company:{
    name: string;
    catchPhrase: string;
  }
}
