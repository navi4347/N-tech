import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ClientsComponent } from './clients.component';

describe('ClientsComponent', () => {
  let component: ClientsComponent;
  let fixture: ComponentFixture<ClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2.cli'));
    expect(headingElement.nativeElement.textContent).toBe('OUR TRUSTED CLIENTS');
  });

  it('should render the customer logos container', () => {
    const containerElement = fixture.debugElement.query(By.css('.customer-logos'));
    expect(containerElement).toBeTruthy();
  });

  it('should render the correct number of customer logo images', () => {
    const logoImages = fixture.debugElement.queryAll(By.css('.customer-logos .svg img'));
    expect(logoImages.length).toBe(5);
  });

  it('should render each logo image with the correct src attribute', () => {
    const logoImages = fixture.debugElement.queryAll(By.css('.customer-logos .svg img'));
    const expectedSources = [
      '../assets/aa.svg',
      '../assets/alba.svg',
      '../assets/ce.svg',
      '../assets/be.svg',
      '../assets/vibhu.svg'
    ];

    logoImages.forEach((img, index) => {
      expect(img.nativeElement.getAttribute('src')).toBe(expectedSources[index]);
    });
  });
});
