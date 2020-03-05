import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count = 0;
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';
  constructor() {
  }
  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }
  caluate(e) {
    this.count = e.target.value.length;

    if (e.key === 'Escape') {
      e.target.value = '';
      this.count = 0;
    }
  }
}
