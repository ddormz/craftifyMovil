import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProyectosPage } from './proyectos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

describe('ProyectosPage', () => {
  let component: ProyectosPage;
  let fixture: ComponentFixture<ProyectosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProyectosPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});