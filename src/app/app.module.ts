import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './elnavbar/elnavbar.component';
import { AppInfoEditorComponent } from './elinfoeditor/elinfoeditor.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppInfoEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
