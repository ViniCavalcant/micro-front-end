import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypographyComponent } from './card-typography.component';

describe('CardTypographyComponent', () => {
  let component: CardTypographyComponent;
  let fixture: ComponentFixture<CardTypographyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypographyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTypographyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
