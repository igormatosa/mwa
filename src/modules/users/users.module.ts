import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from 'src/shared/modules/material.module';
import { FormComponent } from './form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [ListComponent, FormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
