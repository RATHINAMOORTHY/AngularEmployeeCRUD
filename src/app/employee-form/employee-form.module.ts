import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { EmployeeFormRoutingModule } from './employee-form-routing.module';
import { EmployeeFormComponent } from './employee-form.component';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
    CommonModule,
    EmployeeFormRoutingModule,
    ButtonsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forChild(),
  ],
})
export class EmployeeFormModule {}
