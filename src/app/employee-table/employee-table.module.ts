import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { EmployeeTableRoutingModule } from './employee-table-routing.module';
import { EmployeeTableComponent } from './employee-table.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [
    CommonModule,
    EmployeeTableRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
  ],
})
export class EmployeeTableModule {}
