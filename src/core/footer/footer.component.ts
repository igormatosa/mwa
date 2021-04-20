import { Component, OnInit } from '@angular/core';
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

  }

}
