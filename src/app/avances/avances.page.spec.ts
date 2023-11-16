import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvancesPage } from './avances.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

describe('AvancesPage', () => {
  let component: AvancesPage;
  let fixture: ComponentFixture<AvancesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvancesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AvancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
