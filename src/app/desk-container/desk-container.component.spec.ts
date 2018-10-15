import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskContainerComponent } from './desk-container.component';

describe('DeskContainerComponent', () => {
  let component: DeskContainerComponent;
  let fixture: ComponentFixture<DeskContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
