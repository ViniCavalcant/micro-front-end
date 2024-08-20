import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAplicationComponent } from './header-aplication.component';

describe('HeaderAplicationComponent', () => {
  let component: HeaderAplicationComponent;
  let fixture: ComponentFixture<HeaderAplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderAplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
