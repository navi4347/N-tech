import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChooseComponent } from './choose.component';

describe('ChooseComponent', () => {
  let component: ChooseComponent;
  let fixture: ComponentFixture<ChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2'));
    expect(headingElement.nativeElement.textContent).toContain('Why to choose us?');
  });

  it('should render the correct number of list items', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul.list-type-02 li'));
    expect(listItems.length).toBe(6);
  });

  it('should render the correct list items with icons', () => {
    const listItems = fixture.debugElement.queryAll(By.css('ul.list-type-02 li'));
    const expectedTexts = [
      '5+ Years Of Experience',
      'Quality of Work',
      'Time Efficient',
      'Affordable Cost',
      'Secure',
      '24/7 Support'
    ];

    listItems.forEach((item, index) => {
      expect(item.nativeElement.textContent).toContain(expectedTexts[index]);
    });

    const icons = [
      'fa-fort-awesome',
      'fa-medal',
      'fa-hourglass-half',
      'fa-hand-holding-usd',
      'fa-shield-halved',
      'fa-headset'
    ];

    icons.forEach((icon, index) => {
      const iconElement = listItems[index].query(By.css(`i.${icon}`));
      expect(iconElement).toBeTruthy();
    });
  });

  it('should render the image with correct attributes', () => {
    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement).toBeTruthy();
    expect(imgElement.nativeElement.getAttribute('src')).toBe('../assets/values-light.svg');
    expect(imgElement.nativeElement.getAttribute('alt')).toBe('N-tech');
  });
});
