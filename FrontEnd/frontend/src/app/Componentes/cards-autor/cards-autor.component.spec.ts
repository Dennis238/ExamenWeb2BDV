import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsAutorComponent } from './cards-autor.component';

describe('CardsAutorComponent', () => {
  let component: CardsAutorComponent;
  let fixture: ComponentFixture<CardsAutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsAutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsAutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
