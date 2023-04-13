import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokeHeaderComponent } from './poke-header.component';

describe('PokeHeaderComponent', () => {
  let component: PokeHeaderComponent;
  let fixture: ComponentFixture<PokeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PokeHeaderComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have home, list and about links', () => {
    const homeLink = fixture.nativeElement.querySelector('nav ul li:first-child').getAttribute('routerLink');
    const listLink = fixture.nativeElement.querySelector('nav ul li:nth-child(2)').getAttribute('routerLink');
    const aboutLink = fixture.nativeElement.querySelector('nav ul li:last-child').getAttribute('routerLink');

    expect(homeLink).toEqual('/');
    expect(listLink).toEqual('/list');
    expect(aboutLink).toEqual('/about');
  });
});
