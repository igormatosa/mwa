import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { City } from 'src/shared/models/city.model';
import { Qalification } from 'src/shared/models/qalification.model';
import { User } from 'src/shared/models/user.model';
import { CitiesService } from 'src/shared/services/cities.service';
import { UsersService } from 'src/shared/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.dialog.html',
  styleUrls: ['./user.dialog.scss']
})
export class UserDialog implements OnInit {

  title!: string;
  button!: string;
  data!: any;
  model!: User;
  edit = false;
  open = false;
  cities!: City[];
  qalifications!: Qalification[];

  constructor(
    public dialogRef: MatDialogRef<UserDialog>,
    @Inject(MAT_DIALOG_DATA) public udata: any,
    private citiesService: CitiesService,
    private userService: UsersService
  ) { 
    this.data = udata;
  }

  ngOnInit(): void {
    if(this.data.type === 'new') {
      this.title = "Dodavanje korisnika";
      this.button = 'Dodaj korisnika';
      this.model = new User();
      this.open = true;
    } else {
      this.title = "Uređivanje korisnika";
      this.button = 'Uredi korisnika';
      this.userService.readUser(this.data.ID).subscribe(res => {
        this.model = res[0];
        this.edit = true;
        this.open = true;
      });
    }

    this.citiesService.readCities().subscribe(res => {
      this.cities = res;
    });

    this.userService.getQalifications().subscribe(res => {
      this.qalifications = res;
    });
  }

  addUser(): void {
    this.userService.addhUser(this.model).subscribe(res => {
      this.dialogRef.close(true);
    })
  }

  editUser(): void {
    this.model.aktivan = 1;
    this.userService.editUser(this.model).subscribe(res => {
      if(res.affectedRows === 1){
          this.dialogRef.close(true);
      }
    })
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }

}
