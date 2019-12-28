import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactHomePage } from './contact-home.page';

describe('ContactHomePage', () => {
  let component: ContactHomePage;
  let fixture: ComponentFixture<ContactHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
