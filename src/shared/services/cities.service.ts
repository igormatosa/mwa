import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../models/city.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(
    private http: HttpClient
  ) { }

  readCities(): Observable<City[] > {
    return this.http.get<City[]>(environment.apiURL + '/api/dohvatiGradove');
  }
}