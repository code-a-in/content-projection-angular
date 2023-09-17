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
import { SingleSlotExampleComponent } from './blog-examples/single-slot-example/single-slot-example.component';
import { MultiSlotCardComponent } from './shared/multi-slot-card/multi-slot-card.component';
import { MultiSlotProjectionComponent } from './multi-slot-projection/multi-slot-projection.component';
import { MultiSlotExampleComponent } from './blog-examples/multi-slot-example/multi-slot-example.component';
import { TabComponent } from './shared/tab/tab.component';
import { TabExampleComponent } from './blog-examples/tab-example/tab-example.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ModalExampleComponent } from './blog-examples/modal-example/modal-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    PageHeaderComponent,
    NavLinkComponent,
    HomeComponent,
    SingleSlotProjectionComponent,
    CodeDisplayComponent,
    SingleSlotExampleComponent,
    MultiSlotCardComponent,
    MultiSlotProjectionComponent,
    MultiSlotExampleComponent,
    TabComponent,
    TabExampleComponent,
    ModalComponent,
    ModalExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
