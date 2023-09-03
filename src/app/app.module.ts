import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './shared/card/card.component';
import { HeaderComponent } from './header/header.component';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { NavLinkComponent } from './shared/nav-link/nav-link.component';
import { HomeComponent } from './home/home.component';
import { SingleSlotProjectionComponent } from './single-slot-projection/single-slot-projection.component';
import { CodeDisplayComponent } from './shared/code-display/code-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    PageHeaderComponent,
    NavLinkComponent,
    HomeComponent,
    SingleSlotProjectionComponent,
    CodeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
