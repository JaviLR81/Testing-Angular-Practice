import { Component, OnInit } from '@angular/core';
import { PracticeService } from './practice.service';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styles: [
  ]
})
export class PracticeComponent implements OnInit {

  fakeData: any[] = [];

  constructor(private practiceService:PracticeService) { }

  ngOnInit(): void {
    this.practiceService.getFakeData()
        .subscribe(resp => this.fakeData = resp);
  }

}
