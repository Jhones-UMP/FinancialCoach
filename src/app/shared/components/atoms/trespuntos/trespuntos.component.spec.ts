import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrespuntosComponent } from './trespuntos.component';

describe('TrespuntosComponent', () => {
  let component: TrespuntosComponent;
  let fixture: ComponentFixture<TrespuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrespuntosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrespuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
