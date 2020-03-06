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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  deleteUser(user){
    console.log(user);
    this.http.deleteUser(user).subscribe(
      (res:any)=>{
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
