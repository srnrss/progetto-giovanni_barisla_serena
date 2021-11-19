import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterLazyComponent } from './router-lazy.component';

describe('RouterLazyComponent', () => {
  let component: RouterLazyComponent;
  let fixture: ComponentFixture<RouterLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
