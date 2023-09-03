import { Component } from '@angular/core';

@Component({
  selector: 'app-single-slot-projection',
  templateUrl: './single-slot-projection.component.html',
  styleUrls: ['./single-slot-projection.component.scss']
})
export class SingleSlotProjectionComponent {
  code = `
  <div class="card">
    <div class="header">
      <ng-content></ng-content> <!-- The header content will go here -->
    </div>
    <div class="body">
      <!-- Other content specific to this content -->
      Card body written inside the card component
    </div>
  </div>
  `;

  parentCode = `
  <div class="row mt-5">
    <div class="col-4">
      <app-card>First card header</app-card>
    </div>
    <div class="col-4">
      <app-card>Second card header</app-card>
    </div>
    <div class="col-4">
      <app-card>Third card header</app-card>
    </div>
  </div>
  `;
}
