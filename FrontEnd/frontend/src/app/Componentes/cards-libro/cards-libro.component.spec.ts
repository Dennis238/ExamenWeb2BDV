import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsLibroComponent } from './cards-libro.component';

describe('CardsLibroComponent', () => {
  let component: CardsLibroComponent;
  let fixture: ComponentFixture<CardsLibroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsLibroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
