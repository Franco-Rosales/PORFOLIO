import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAccionComponent } from './barra-accion.component';

describe('BarraAccionComponent', () => {
  let component: BarraAccionComponent;
  let fixture: ComponentFixture<BarraAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraAccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
