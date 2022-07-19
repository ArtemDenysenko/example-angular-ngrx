import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-iframe-test',
  templateUrl: './iframe-test.component.html',
  styleUrls: ['./iframe-test.component.less']
})
export class IFrameTestComponent implements OnInit, AfterViewInit {

  @ViewChild('childFrame')
  childFrame: ElementRef;

  @ViewChild('alienFrame')
  alienFrame: ElementRef;

  iFrameType = 'vue';
  count: number = 0;

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.loadChildIframe();
  }

  loadChildIframe(){
    const iframe = this.childFrame.nativeElement.contentWindow;
    iframe.onload = function() {
      console.log("IFrame Loaded");
    };
    iframe.onerror = function() {
      console.log("Error from clild iframe!");
    };
    console.log(this.childFrame);
    this.listenToChildEvents();
  }

  sendMessage(){
    const eventName = 'increase-count';
    const targetOrigin = 'http://localhost:3000';
    this.childFrame.nativeElement.contentWindow.postMessage(eventName, targetOrigin);
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
