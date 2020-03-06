import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "table",
    loadChildren: () =>
      import("./employee-table/employee-table.module").then(
        m => m.EmployeeTableModule
      )
  },
  {
    path: "home",
    loadChildren: () =>
      import("./employee-form/employee-form.module").then(
        m => m.EmployeeFormModule
      )
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "**",
    loadChildren: () =>
      import("./employee-form/employee-form.module").then(
        m => m.EmployeeFormModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
