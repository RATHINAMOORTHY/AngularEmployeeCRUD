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

  UpdateUser(){  
    let index = this.allUsers.findIndex( user => user.id === this.EmployeeID);
    this.http.updateUser(this.allUsers[index]).subscribe(
      (res:any)=>{
        console.log(res);
        this.allUsers[index].username = this.Name;
        this.allUsers[index].company.name = this.UserName;
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

  openModal(template: TemplateRef<any>,user) {
    this.Name = user.name;
    this.UserName = user.username;
    this.CompanyName = user.company.name;  //Two way bind 
    this.CompanyCatchPhrase = user.company.catchPhrase;
    this.EmployeeID =user.id;
    this.Phone = user.phone;
    this.Email = user.email;
    this.Website = user.website;
    this.modalRef = this.modalService.show(template);
  }
}
