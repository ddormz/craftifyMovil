import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CotizacionesPage } from './cotizaciones.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

describe('CotizacionesPage', () => {
  let component: CotizacionesPage;
  let fixture: ComponentFixture<CotizacionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CotizacionesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CotizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
