import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleSlotProjectionComponent } from './single-slot-projection/single-slot-projection.component';

const routes: Routes = [
  { path: 'single-slot-projection', component: SingleSlotProjectionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
