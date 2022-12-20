import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';



@NgModule({
  declarations: [
    LoginComponent,
    InfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoginComponent,
    InfoComponent
  ]

})
export class StudentModule { }
