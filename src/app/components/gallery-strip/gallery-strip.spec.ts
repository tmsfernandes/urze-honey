import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryStrip } from './gallery-strip';

describe('GalleryStrip', () => {
  let component: GalleryStrip;
  let fixture: ComponentFixture<GalleryStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryStrip],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryStrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
