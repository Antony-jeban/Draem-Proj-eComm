import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DreamModule} from './dream.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    DreamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
