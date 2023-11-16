import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModaltareaPage } from './modaltarea.page';

describe('ModaltareaPage', () => {
  let component: ModaltareaPage;
  let fixture: ComponentFixture<ModaltareaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModaltareaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
