import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewFranchiseesPage } from './view-franchisees.page';

describe('ViewFranchiseesPage', () => {
  let component: ViewFranchiseesPage;
  let fixture: ComponentFixture<ViewFranchiseesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFranchiseesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewFranchiseesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
