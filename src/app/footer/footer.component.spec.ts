import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the copyright notice with the current year', () => {
    const currentYear = new Date().getFullYear().toString(); 
    const copyrightElement = fixture.debugElement.query(By.css('p'));

    expect(currentYear).toContain(component.currentYear);
    expect(copyrightElement.nativeElement.textContent)
      .toContain(`Copyright ©${currentYear}`);
  });

  it('should render the "Designed and Developed by" section with the developer\'s name', () => {
    const developerName = 'Naveen Chowdary';
    const designedByElement = fixture.debugElement.query(By.css('p span'));

    expect(designedByElement.nativeElement.textContent).toBe(developerName);
  });
});
