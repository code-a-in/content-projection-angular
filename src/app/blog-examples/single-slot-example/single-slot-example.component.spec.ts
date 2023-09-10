import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSlotExampleComponent } from './single-slot-example.component';

describe('SingleSlotExampleComponent', () => {
  let component: SingleSlotExampleComponent;
  let fixture: ComponentFixture<SingleSlotExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSlotExampleComponent]
    });
    fixture = TestBed.createComponent(SingleSlotExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
