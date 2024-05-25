import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DigitalComponent } from './digital.component';

describe('DigitalComponent', () => {
  let component: DigitalComponent;
  let fixture: ComponentFixture<DigitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DigitalComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(DigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2'));
    expect(headingElement.nativeElement.textContent).toBe('DIGITAL MARKETING SERVICES');
  });

  it('should render all service items', () => {
    const serviceItems = fixture.debugElement.queryAll(By.css('.col-sm-6.col-lg-4'));
    expect(serviceItems.length).toBe(6);
  });

  it('should render correct service descriptions and icons', () => {
    const serviceItems = fixture.debugElement.queryAll(By.css('.col-sm-6.col-lg-4'));
    const expectedServices = [
      { title: 'Search Engine', description: 'Increase your page visibility in search engines through paid advertising and our search engine marketing services.', icon: 'fa-magnifying-glass-dollar' },
      { title: 'Social Media Optimization', description: 'Social media and page management, Designing Ad, lead generation, and tracking, Ad campaigns, and creatives.', icon: 'fa-facebook-f' },
      { title: 'Pay Per Click', description: 'Pay Per Click helps you to compete with competitors in a faster way to achieve ROI goals.', icon: 'fa-circle-dollar-to-slot' },
      { title: 'E-Mail Marketing', description: 'Email marketing is the process of targeting your audience and customers through email. Faster way to achieve target goals.', icon: 'fa-envelope-open-text' },
      { title: 'Affiliate Marketing', description: 'Affiliate marketing is an advertising model in which a company compensates third-party publishers to generate traffic.', icon: 'fa-chart-line' },
      { title: 'Mobile Marketing', description: 'Digital marketers are excited to carry out mobile campaigns because they are aware that motive customers are buyers.', icon: 'fa-android' }
    ];

    serviceItems.forEach((item, index) => {
      const titleElement = item.query(By.css('h5'));
      const descriptionElement = item.query(By.css('p'));
      const iconElement = item.query(By.css(`.icon-90 i.fa-solid.fa-${expectedServices[index].icon}`));

      expect(titleElement.nativeElement.textContent).toContain(expectedServices[index].title);
      expect(descriptionElement.nativeElement.textContent).toContain(expectedServices[index].description);
      expect(iconElement).toBeTruthy();
    });
  });
});
