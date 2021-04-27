import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CONSTANTS } from 'src/shared/constants';
import { Boolean, Q } from 'src/shared/enums';
import { GeneralService } from 'src/shared/services/general.service';

export const CONST = 'Ovo je tekst konstante';

export const KONSTANTE = {
  pi: 3.14,
  tekst: 'test',
  math: 2.2252
}

export enum Types {
  'Text' = 1,
  'Number' = 2
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  dataArray = [
    {
      id: 1,
      name: 'Pero',
      surname: 'Preic'
    },
    {
      id: 2,
      name: 'Marko',
      surname: 'Preic'
    },
    {
      id: 3,
      name: 'Marko',
      surname: 'Markovic'
    },
    {
      id: 4,
      name: 'Marko',
      surname: 'Trupkovic'
    }
  ];

  numberArray = [2,3,4,5,6];

  shared!: string;
  liveShared!: string;
  dateString: Date;
  textString = 'Ovo je neki tekst';
  constString = CONST;
  konstante = KONSTANTE;
  constants = CONSTANTS;
  
  constructor(
    private generalService: GeneralService
  ) { 
    this.generalService.data.subscribe(data => {
      this.liveShared = data;
    });

    this.dateString = new Date();

  }

  ngOnInit(): void {
    const type = 1;
    this.shared = this.generalService.sharedVariable;
    setTimeout(() => {
      this.generalService.setVariable('new string');
    }, 3000);

    const api = environment.apiURL;

    // id: 1, value: 'Text'; id:2, value: 'Number';   value: 1, value: 0

    if(api === Boolean.True){
      	
    }

    if(api === '1'){
      	
    }

    if(type === 1) {

    }

    if(type === Types.Text) {

    }

    if(type === Types.Number) {
      
    }

    switch(type){
      case Types.Text: {
        break;
      }
      case Types.Number: {
        break;
      }
      default: {
        break;
      }
    }

    console.log(this.dataArray);

    const person = this.dataArray.find(p => p.id === 1);
    console.log('1 case: '  + JSON.stringify(person));

    const person2 = this.dataArray.find(p => p.name === 'Pero');
    console.log('2 case:' + JSON.stringify(person2));

    const person3 = this.dataArray.find(p => p.name === 'Marko');
    console.log('3 case:' + JSON.stringify(person3));

    const person4 = this.dataArray.find(p => p.name === 'Marko' && p.surname === 'Markovic');
    console.log('4 case:' + JSON.stringify(person4));

    const persons = this.dataArray.filter(p => p.name === 'Marko');
    console.log('5 case:' + JSON.stringify(persons));

    const persons2 = this.dataArray.map(p => {
      return p.name;
    });
    console.log('6 case:' + JSON.stringify(persons2));

    const persons3 = this.dataArray.map(p => {
      return p.name + ' ' + p.surname;
    });
    console.log('7 case:' + JSON.stringify(persons3));

    const persons4 = this.dataArray.map(p => {
      return {
        value: p.id,
        text: p.name + ' ' + p.surname 
      }
    });
    console.log('8 case:' + JSON.stringify(persons4));

    const numbers = this.numberArray.map(n => {
      return n * 10;
    });

    console.log(this.numberArray);
    console.log(numbers);

    const obsNumbers = from(this.numberArray);

    console.log(obsNumbers);

    obsNumbers.subscribe(data => {
      console.log(data);
    });
  }

}
