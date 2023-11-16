import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalavancesPage } from './modalavances.page';

describe('ModalavancesPage', () => {
  let component: ModalavancesPage;
  let fixture: ComponentFixture<ModalavancesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModalavancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
