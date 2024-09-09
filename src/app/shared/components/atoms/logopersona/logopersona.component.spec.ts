import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogopersonaComponent } from './logopersona.component';

describe('LogopersonaComponent', () => {
  let component: LogopersonaComponent;
  let fixture: ComponentFixture<LogopersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogopersonaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogopersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
