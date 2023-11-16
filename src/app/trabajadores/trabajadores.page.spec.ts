import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TrabajadoresPage } from './trabajadores.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

describe('TrabajadoresPage', () => {
  let component: TrabajadoresPage;
  let fixture: ComponentFixture<TrabajadoresPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrabajadoresPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TrabajadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
