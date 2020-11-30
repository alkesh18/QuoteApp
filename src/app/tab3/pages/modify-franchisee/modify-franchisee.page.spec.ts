import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyFranchiseePage } from './modify-franchisee.page';

describe('ModifyFranchiseePage', () => {
  let component: ModifyFranchiseePage;
  let fixture: ComponentFixture<ModifyFranchiseePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyFranchiseePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyFranchiseePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
