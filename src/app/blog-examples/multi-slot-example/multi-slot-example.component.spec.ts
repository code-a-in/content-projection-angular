import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSlotExampleComponent } from './multi-slot-example.component';

describe('MultiSlotExampleComponent', () => {
  let component: MultiSlotExampleComponent;
  let fixture: ComponentFixture<MultiSlotExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiSlotExampleComponent]
    });
    fixture = TestBed.createComponent(MultiSlotExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
