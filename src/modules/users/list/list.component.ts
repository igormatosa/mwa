import { Component, OnInit } from '@angular/core';
import { User } from 'src/shared/models/user.model';
import { UsersService } from 'src/shared/services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from './../../../shared/modules/dialog/confirmationDialog';
import { UserDialog } from 'src/shared/modules/user/user.dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['ime', 'prezime', 'datumRodenja', 'adresa', 'grad_naziv', 'OIB', 'email', 'brojMobitela', 'strucnaSprema_naziv', 'actions'];
  users: User[] = [];
  
  constructor(
    private usersService: UsersService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.readUsers().subscribe(users => {
      this.users = users;
    });
  }

  openDialog(idUser: number) {
    const dialogRef = this.dialog.open(ConfirmationDialog,{
      data:{
        message: 'Da li ste sigurno da želite obrisati korisnika?',
        buttonText: {
          ok: 'Da',
          cancel: 'Odustani'
        }
      }
    });


    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const patch: User = {
          ID: idUser.toString(),
          aktivan: 0
        }

        this.usersService.patchUser(patch).subscribe((res: any) => {
          this.getUsers();
        });
      }
    });
  }

  

  deleteItem(id: number): void {
    this.openDialog(id);
  }

  addNewUser(){
    const dialogRef = this.dialog.open(UserDialog,{
      height: '500px',
      width: '700px',
      data:{
        type: 'new',
        ID: undefined
      }
    });


    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.getUsers();
      }
    });
  }

  editUser(id: number){
    const dialogRef = this.dialog.open(UserDialog,{
      height: '500px',
      width: '700px',
      data:{
        type: 'edit',
        ID: id
      }
    });


    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.getUsers();
      }
    });
  }
}
