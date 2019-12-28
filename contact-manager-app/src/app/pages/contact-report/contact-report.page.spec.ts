import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactReportPage } from './contact-report.page';

describe('ContactReportPage', () => {
  let component: ContactReportPage;
  let fixture: ComponentFixture<ContactReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
