import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFranchiseePage } from './add-franchisee.page';

describe('AddFranchiseePage', () => {
  let component: AddFranchiseePage;
  let fixture: ComponentFixture<AddFranchiseePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFranchiseePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFranchiseePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
