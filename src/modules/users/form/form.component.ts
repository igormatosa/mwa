import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/shared/services/general.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name!: string;
  email!: string;
  shared!: string;
  liveShared!: string;

  constructor(
    private generalService: GeneralService
  ) { 
    this.generalService.data.subscribe(data => {
      this.liveShared = data;
    });
  }

  ngOnInit(): void {
    this.shared = this.generalService.sharedVariable;
  }

}
