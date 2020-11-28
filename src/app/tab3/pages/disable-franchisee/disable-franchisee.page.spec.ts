import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisableFranchiseePage } from './disable-franchisee.page';

describe('DisableFranchiseePage', () => {
  let component: DisableFranchiseePage;
  let fixture: ComponentFixture<DisableFranchiseePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableFranchiseePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisableFranchiseePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
