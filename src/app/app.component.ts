import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  activeTab = '';
  modelLoaded = false;
  model = {
    info: {}
  };
  navLinks = [
    {
      id: 'info',
      href: 'info'
    },
    {
      id: 'menu',
      href: 'menu'
    },
    {
      id: 'slider',
      href: 'slider'
    }
  ];
  getActiveTab(tab) {
    this.activeTab = tab;
  }
  changeInfo(info) {
    this.model.info = info;
  }
  printModel() {
    console.log(JSON.stringify(this.model, null, 4));
  }
  downloadModel() {
    const dModel = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.model, null, 4));
    const a = document.createElement('a');
    a.setAttribute('href', dModel);
    a.setAttribute('download', 'model.json');
    a.click();
  }
  getJson = function(event) {
    const files = event.target.files;
    const reader: FileReader = new FileReader();
    reader.onload = (readerEvent: Event) =>  {
      const obj = JSON.parse(reader.result);
      this.model = obj;
      this.modelLoaded = true;
    };
    reader.readAsText(event.target.files[0]);
  };
}
