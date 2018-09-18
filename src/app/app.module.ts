import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DreamModule} from './dream.module';
import { BreezeBridgeAngular2Module } from 'breeze-bridge-angular2';



import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    DreamModule,
    BreezeBridgeAngular2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
