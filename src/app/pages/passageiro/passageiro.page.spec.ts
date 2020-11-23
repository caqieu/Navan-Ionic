import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PassageiroPage } from './passageiro.page';

describe('PassageiroPage', () => {
  let component: PassageiroPage;
  let fixture: ComponentFixture<PassageiroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageiroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PassageiroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
