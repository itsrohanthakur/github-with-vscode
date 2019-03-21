import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomertableComponent } from './customertable.component';

describe('CustomertableComponent', () => {
  let component: CustomertableComponent;
  let fixture: ComponentFixture<CustomertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
