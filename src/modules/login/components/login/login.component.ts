import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from 'src/shared/models/login.model';
import { AuthenticationService } from 'src/shared/services/authentication.service';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    this.password = Md5.hashStr(this.password);
    this.authenticationService.login(this.username, this.password).subscribe((user: any) => {
      console.log(user);
      this.router.navigate(['/'])
    });
  }

}
