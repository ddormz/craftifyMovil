import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModaltrabajadoresPage } from './modaltrabajadores.page';

describe('ModaltrabajadoresPage', () => {
  let component: ModaltrabajadoresPage;
  let fixture: ComponentFixture<ModaltrabajadoresPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModaltrabajadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
