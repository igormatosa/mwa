import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { environment } from 'src/environments/environment';
import { Qalification } from '../models/qalification.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient
  ) { }

  readUsers(): Observable<User[] > {
    return this.http.get<User[]>(environment.apiURL + '/api/dohvatiZaposlenike');
  }

  readUser(id: number): Observable<User[]> {
    return this.http.get<User[]>(environment.apiURL + '/api/dohvatiZaposlenikaByID?id=' + id);
  }

  patchUser(patch: any): Observable<any> {
    return this.http.put<User[]>(environment.apiURL + '/api/patchZaposlenika', patch);
  }

  addhUser(user: User): Observable<any> {
    return this.http.post<User>(environment.apiURL + '/api/dodajZaposlenika', user);
  }

  editUser(user: User): Observable<any> {
    return this.http.put<User>(environment.apiURL + '/api/azurirajZaposlenika', user);
  }

  getQalifications(): Observable<Qalification[]> {
    return this.http.get<Qalification[]>(environment.apiURL + '/api/dohvatiStrucnuSpremu');
  }
}
