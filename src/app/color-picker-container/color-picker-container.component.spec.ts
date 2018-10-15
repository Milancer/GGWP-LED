import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerContainerComponent } from './color-picker-container.component';

describe('ColorPickerContainerComponent', () => {
  let component: ColorPickerContainerComponent;
  let fixture: ComponentFixture<ColorPickerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
