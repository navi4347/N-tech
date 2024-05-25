import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2'));
    expect(headingElement.nativeElement.textContent).toBe('Get in Touch with Us');
  });

  it('should render the correct number of contact list items', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul.list-type-12 li'));
    expect(listItems.length).toBe(4);
  });

  it('should render the correct contact details with icons', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul.list-type-12 li'));
    const expectedDetails = [
      { text: '+91 8801607177', icon: 'fa-phone-volume' },
      { text: 'admin@ntechglobalsolutions.org', icon: 'fa-envelope' },
      { text: 'www.ntechglobalsolutions.org', icon: 'fa-globe' },
      { text: 'Bangalore,Karnataka, India', icon: 'fa-map-location-dot' }
    ];

    listItems.forEach((item, index) => {
      expect(item.nativeElement.textContent.trim()).toContain(expectedDetails[index].text);
      const iconElement = item.query(By.css(`i.${expectedDetails[index].icon}`));
      expect(iconElement).toBeTruthy();
    });
  });

  it('should render the image with correct attributes', () => {
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.getAttribute('src')).toBe('../assets/get2.gif');
    expect(imgElement.nativeElement.getAttribute('alt')).toBe('N-tech');
  });
});
