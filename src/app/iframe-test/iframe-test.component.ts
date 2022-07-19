import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-iframe-test',
  templateUrl: './iframe-test.component.html',
  styleUrls: ['./iframe-test.component.less']
})
export class IFrameTestComponent implements OnInit, AfterViewInit {

  @ViewChildren('childFrame')
  childFrames: QueryList<ElementRef>;

  iFrameType = 'vue';
  count: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.listenToChildEvents();
  }

  sendMessage(){
    const eventName = 'increase-count';
    const targetOrigin = 'http://localhost:3000';
    this.childFrames.forEach(element => {
      if(element.nativeElement.contentWindow) {
        element.nativeElement.contentWindow.postMessage(eventName, targetOrigin);
      } else {
        console.error('Element has no contentWindow');
      }
    })
  }

  onLoad() {
    console.log('Iframe loaded');
  }

  listenToChildEvents() {
    window.onmessage = (message) => {
      if(message.data === 'child-increase-count') {
        this.count = this.count + 1;
      }
    };
  }
}
