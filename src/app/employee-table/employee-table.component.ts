import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
})
export class EmployeeTableComponent implements OnInit {
  rows = [
    {
      id: 0,
      name: 'Austin',
      phone: '+9124235463',
      website: 'www.google.co',
      company: 'Swimlane',
    },
  ];
  columns = [
    { prop: 'id' },
    { name: 'name' },
    { name: 'phone' },
    { name: 'website' },
    { name: 'Company' },
  ];
  constructor(private http: TableService) {}

  ngOnInit(): void {
    this.http.getUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.rows = res.map(user => {
          return {
            id: user.id,
            name: user.name,
            phone: user.phone,
            website: user.website,
            company: user.company.name,
          };
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
