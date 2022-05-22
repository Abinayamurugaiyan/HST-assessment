import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveUiComponent } from './responsive-ui.component';

describe('ResponsiveUiComponent', () => {
  let component: ResponsiveUiComponent;
  let fixture: ComponentFixture<ResponsiveUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
