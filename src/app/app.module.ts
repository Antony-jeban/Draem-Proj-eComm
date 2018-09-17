import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DreamModule} from './dream.module';




import { AppComponent } from './app.component';


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
