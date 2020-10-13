import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyClientPage } from './modify-client.page';

describe('ModifyClientPage', () => {
  let component: ModifyClientPage;
  let fixture: ComponentFixture<ModifyClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
