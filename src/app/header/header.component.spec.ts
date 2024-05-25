import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent]
    }).compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle menu when toggleMenu() is called', () => {
    expect(component.isMenuOpen).toBeFalse();

    component.toggleMenu();
    expect(component.isMenuOpen).toBeTrue();

    component.toggleMenu();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should close menu when closeMenu() is called', () => {
    component.isMenuOpen = true;
    component.closeMenu();
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should toggle menu when menu button is clicked', () => {
    const menuButton = fixture.debugElement.query(By.css('.lg\\:hidden button'));
    menuButton.triggerEventHandler('click', null);
    expect(component.isMenuOpen).toBeTrue();

    menuButton.triggerEventHandler('click', null);
    expect(component.isMenuOpen).toBeFalse();
  });

  it('should close menu when menu item is clicked', () => {
    component.isMenuOpen = true;
    fixture.detectChanges();

    const menuItem = fixture.debugElement.query(By.css('.lg\\:hidden a'));
    menuItem.triggerEventHandler('click', null);
    expect(component.isMenuOpen).toBeFalse();
  });
});
