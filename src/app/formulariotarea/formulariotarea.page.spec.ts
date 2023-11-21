import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormulariotareaPage } from './formulariotarea.page';

describe('FormulariotareaPage', () => {
  let component: FormulariotareaPage;
  let fixture: ComponentFixture<FormulariotareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormulariotareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
