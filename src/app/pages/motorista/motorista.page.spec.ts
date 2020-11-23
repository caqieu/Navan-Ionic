import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MotoristaPage } from './motorista.page';

describe('MotoristaPage', () => {
  let component: MotoristaPage;
  let fixture: ComponentFixture<MotoristaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotoristaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MotoristaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
