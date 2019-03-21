import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoverDirectiveDirective } from './hover-directive.directive';
import { StructuralDirectiveDirective } from './structural-directive.directive';
import { LoginFormComponent } from './login-form/login-form.component';
import {HttpModule} from '@angular/http';
import { CustomertableComponent } from './customertable/customertable.component';
import {DemoMaterialModule}  from './angular-material-modules';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TableComponent } from './table/table.component';
import { EmpTableComponent } from './emp-table/emp-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';

import { FormComponent } from './form/form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HoverDirectiveDirective,
    StructuralDirectiveDirective,
    LoginFormComponent,
    CustomertableComponent,
    EmployeeComponent,
    TableComponent,
    EmpTableComponent,
    DashboardComponent,
    NavbarComponent,
    FormComponent,
    NavbarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    DemoMaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    RouterModule.forRoot(
      [
        {path:'', component:FormComponent},
        {path:'employee' , component:EmployeeComponent},
        {path:'table/:tid/:tname', component:TableComponent},
        {path:'table', component:TableComponent},
        {path:'login' ,component:LoginComponent}
      ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
