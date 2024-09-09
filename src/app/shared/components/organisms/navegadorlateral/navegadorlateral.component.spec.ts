import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegadorlateralComponent } from './navegadorlateral.component';

describe('NavegadorlateralComponent', () => {
  let component: NavegadorlateralComponent;
  let fixture: ComponentFixture<NavegadorlateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavegadorlateralComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavegadorlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
