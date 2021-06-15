import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersModule } from './users/users.module';
import { LoginComponent } from './login/components/login/login.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    UsersModule,
    FormsModule
  ]
})
export class ModulesModule { }
