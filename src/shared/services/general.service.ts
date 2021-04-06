import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {


  sharedVariable: string = 'Shared variable';
  private generalData = new BehaviorSubject<string>('begin string');
  readonly data = this.generalData.asObservable();

  constructor() { 

  }

  setVariable(data: string): void {
    this.generalData.next(data);
  }

  getVariable(): string {
    const data = this.generalData.getValue();
    return data;
  }
}
