import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalcotizacionesPage } from './modalcotizaciones.page';

describe('ModalcotizacionesPage', () => {
  let component: ModalcotizacionesPage;
  let fixture: ComponentFixture<ModalcotizacionesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalcotizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
