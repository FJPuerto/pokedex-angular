import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PokeSearchComponent } from './poke-search.component';

describe('PokeSearchComponent', () => {
  let component: PokeSearchComponent;
  let fixture: ComponentFixture<PokeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search value on input', () => {
    spyOn(component.emmitSearch, 'emit');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'Charmander';
    input.dispatchEvent(new Event('keyup'));
    fixture.detectChanges();
    expect(component.emmitSearch.emit).toHaveBeenCalledWith('Charmander');
  });
});
