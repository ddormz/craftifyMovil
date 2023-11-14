import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalproductosPage } from './modalproductos.page';

describe('ModalproductosPage', () => {
  let component: ModalproductosPage;
  let fixture: ComponentFixture<ModalproductosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
