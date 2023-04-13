import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [FooterComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a container with class "container"', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement).toBeTruthy();
  });

  it('should have a row with class "row"', () => {
    const rowElement = fixture.debugElement.query(By.css('.row'));
    expect(rowElement).toBeTruthy();
  });

  it('should have a col-md-6 element with "Pokedex - Proyecto 2023" text', () => {
    const colElement = fixture.debugElement.query(By.css('.col-md-6'));
    const pElement = colElement.query(By.css('p'));
    expect(pElement.nativeElement.textContent.trim()).toEqual('Pokedex - Proyecto 2023');
  });

  it('should have three links in the ul element', () => {
    const ulElement = fixture.debugElement.query(By.css('.footer-menu'));
    const liElements = ulElement.queryAll(By.css('li'));
    expect(liElements.length).toEqual(3);
  });

  it('should have a Home link with routerLink "/"', () => {
    const ulElement = fixture.debugElement.query(By.css('.footer-menu'));
    const homeLink = ulElement.query(By.css('a[href="/"]'));
    expect(homeLink).toBeTruthy();
  });

  it('should have a List link with routerLink "/list"', () => {
    const ulElement = fixture.debugElement.query(By.css('.footer-menu'));
    const listLink = ulElement.query(By.css('a[href="/list"]'));
    expect(listLink).toBeTruthy();
  });

  it('should have an About link with routerLink "/about"', () => {
    const ulElement = fixture.debugElement.query(By.css('.footer-menu'));
    const aboutLink = ulElement.query(By.css('a[href="/about"]'));
    expect(aboutLink).toBeTruthy();
  });
});
