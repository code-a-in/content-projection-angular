import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotProjectionComponent } from './single-slot-projection.component';

describe('SingleSlotProjectionComponent', () => {
  let component: SingleSlotProjectionComponent;
  let fixture: ComponentFixture<SingleSlotProjectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSlotProjectionComponent]
    });
    fixture = TestBed.createComponent(SingleSlotProjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
