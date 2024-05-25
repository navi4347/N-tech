import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct section heading', () => {
    const headingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
    expect(headingElement.textContent).toContain('Do More With Us');
  });

  it('should have the correct section description', () => {
    const paragraphElement = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(paragraphElement.textContent).toContain('We analyze trends and come up with creativity connecting the virtual and real worlds.');
  });

  it('should display four media boxes with the correct content', () => {
    const mediaBoxes = fixture.debugElement.queryAll(By.css('.media'));
    expect(mediaBoxes.length).toBe(4);

    const expectedHeadings = [
      'Creative Concepts',
      'Testing for Perfection',
      'Innovative Solutions',
      'We are the Best'
    ];

    const expectedParagraphs = [
      'We will listen to reach out your goals regardless of what you sell. Based on that, we introduce more creative ideas for perfective work.',
      'We deal individually with each project. Our design is sharp, clean, and we make sure that it is 99.9% error-free.',
      'N-tech has the best team who is qualified and certified. They are well experienced by providing accurate and timely work.',
      'We proudly say that we are One of the top IT Support and Service Providers with over 100+ employees team work is our key to success.'
    ];

    mediaBoxes.forEach((box, index) => {
      const heading = box.query(By.css('h6')).nativeElement.textContent;
      const paragraph = box.query(By.css('p')).nativeElement.textContent;
      expect(heading).toContain(expectedHeadings[index]);
      expect(paragraph).toContain(expectedParagraphs[index]);
    });
  });

  it('should display correct images with alt texts', () => {
    const images = fixture.debugElement.queryAll(By.css('img'));
    expect(images.length).toBe(4);

    const expectedAltTexts = [
      'N-tech',
      'N-tech',
      'N-tech',
      'N-tech'
    ];

    images.forEach((img, index) => {
      expect(img.nativeElement.alt).toBe(expectedAltTexts[index]);
    });
  });

  it('should apply correct CSS classes to the elements', () => {
    const section = fixture.debugElement.query(By.css('section')).nativeElement;
    expect(section.classList).toContain('gray-bg');

    const mediaBoxes = fixture.debugElement.queryAll(By.css('.media'));
    mediaBoxes.forEach((box) => {
      expect(box.nativeElement.classList).toContain('box-shadow');
      expect(box.nativeElement.classList).toContain('white-bg');
      expect(box.nativeElement.classList).toContain('border-radius-10');
    });
  });
});
