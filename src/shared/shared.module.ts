import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './modules/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmationDialog } from './modules/dialog/confirmationDialog';
import { UserDialog } from './modules/user/user.dialog';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmationDialog,
    UserDialog
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    ConfirmationDialog,
    UserDialog
  ],
  entryComponents: [
    ConfirmationDialog,
    UserDialog
  ]
})
export class SharedModule { }
