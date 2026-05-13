import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginSection } from './origin-section';

describe('OriginSection', () => {
  let component: OriginSection;
  let fixture: ComponentFixture<OriginSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginSection],
    }).compileComponents();

    fixture = TestBed.createComponent(OriginSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
