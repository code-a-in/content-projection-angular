import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingleSlotProjectionComponent } from './single-slot-projection/single-slot-projection.component';
import { MultiSlotProjectionComponent } from './multi-slot-projection/multi-slot-projection.component';

const routes: Routes = [
  { path: 'single-slot-projection', component: SingleSlotProjectionComponent },
  { path: 'multi-slot-projection', component: MultiSlotProjectionComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
