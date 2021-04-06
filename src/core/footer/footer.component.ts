import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/services/general.service';

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
  
  constructor(
    private generalService: GeneralService
  ) { 
    this.generalService.data.subscribe(data => {
      this.liveShared = data;
    });

    this.dateString = new Date();

  }

  ngOnInit(): void {
    this.shared = this.generalService.sharedVariable;
    setTimeout(() => {
      this.generalService.setVariable('new string');
    }, 3000);
  }

}
