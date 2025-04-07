import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodTrackingComponent } from './mood-tracking.component';

describe('MoodTrackingComponent', () => {
  let component: MoodTrackingComponent;
  let fixture: ComponentFixture<MoodTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodTrackingComponent]
    });
    fixture = TestBed.createComponent(MoodTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
