import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalproyectosPage } from './modalproyectos.page';

describe('ModalproyectosPage', () => {
  let component: ModalproyectosPage;
  let fixture: ComponentFixture<ModalproyectosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalproyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
