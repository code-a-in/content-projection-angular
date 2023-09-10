import { Component } from '@angular/core';

@Component({
  selector: 'app-multi-slot-projection',
  templateUrl: './multi-slot-projection.component.html',
  styleUrls: ['./multi-slot-projection.component.scss']
})
export class MultiSlotProjectionComponent {
  code = `
  <div class="card">
    <div class="header">
      <ng-content select="[header]"></ng-content> <!-- The header content will go here -->
    </div>
    <div class="body">
      <ng-content select="[body]"></ng-content> <!-- The body content will go here -->
    </div>
    <div class="footer">
      <ng-content select="[footer]"></ng-content> <!-- The footer content will go here -->
    </div>
  </div>
  `;
  parentCode = `
  <app-multi-slot-card>
    <ng-container header>The header</ng-container>
    <ng-container body>I am the body of the card</ng-container>
    <div class="d-flex align-items-center" footer>
      <button class="btn btn-primary me-2">Done</button>
      <button class="btn btn-danger">Cancel</button>
    </div>
  </app-multi-slot-card>
  `;
}
