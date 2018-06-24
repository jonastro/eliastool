import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-infoeditor',
  templateUrl: './elinfoeditor.component.html',
  styleUrls: ['./elinfoeditor.component.css']
})
export class AppInfoEditorComponent {
  @Input() info: any;
}
