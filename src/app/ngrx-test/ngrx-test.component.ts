import {Component, OnInit} from '@angular/core';
import {NgrxTestService} from "./ngrx-test.service";

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.less']
})
export class NgrxTestComponent implements OnInit {

  name: string;

  constructor(public testService: NgrxTestService) {
  }

  ngOnInit(): void {
  }

  increaseCount() {
    this.testService.increaseCount();
  }

  switchSpinner() {
    this.testService.switchSpinner();
  }

  setName() {
    this.testService.setName(this.name);
  }
}
