import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { SingleSlotProjectionComponent } from './single-slot-projection/single-slot-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SingleSlotProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
