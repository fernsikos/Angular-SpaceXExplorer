import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDataDialogComponent } from './rocket-data-dialog.component';

describe('RocketDataDialogComponent', () => {
  let component: RocketDataDialogComponent;
  let fixture: ComponentFixture<RocketDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RocketDataDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RocketDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
