import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotCardComponent } from './multi-slot-card.component';

describe('MultiSlotCardComponent', () => {
  let component: MultiSlotCardComponent;
  let fixture: ComponentFixture<MultiSlotCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSlotCardComponent]
    });
    fixture = TestBed.createComponent(MultiSlotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
