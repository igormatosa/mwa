import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Login, LoginData } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject!: BehaviorSubject<LoginData>;
  public currentUser!: Observable<LoginData>;

  constructor(
    private http: HttpClient,
    private router: Router) {
    let logged = localStorage.getItem('currentUser');
    if(logged !== null){
      this.currentUserSubject = new BehaviorSubject<LoginData>(JSON.parse(logged).data[0]);
      this.currentUser = this.currentUserSubject.asObservable();
    }else {
      this.currentUserSubject = new BehaviorSubject<LoginData>(new LoginData);
      this.currentUser = this.currentUserSubject.asObservable();
    }
  }

  public get currentUserValue(): LoginData {
    return this.currentUserSubject.value;
}

  login(username: string, password: string) {
    const data = {
      username: username,
      password: password
    }
    const headers = { 'content-type': 'application/json'}  
      return this.http.post<Login>(environment.apiURL + '/api/login', JSON.stringify(data), {'headers':headers})
          .pipe(map((user: Login) => {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));
              if(user.data !== undefined && user.data.length > 0){
                this.currentUserSubject.next(user.data[0]);
              }
              return user;
          }));
  }

  logout() {
      // remove user from local storage and set current user to null
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(new LoginData());
      this.router.navigate(['/login']);
  }
}
