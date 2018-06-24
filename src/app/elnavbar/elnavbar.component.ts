import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './elnavbar.component.html',
  styleUrls: ['./elnavbar.component.css']
})
export class AppNavbarComponent {
  @Input() links: Array<any>;
  @Output() selectTab = new EventEmitter<string>();
  currentTab = '';
  onChangeTab(tab: string) {
    this.currentTab = tab;
    this.selectTab.emit(tab);
  }
}
