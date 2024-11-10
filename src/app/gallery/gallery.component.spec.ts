import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryComponent } from './gallery.component';

describe('GaleryComponent', () => {
  let component: GaleryComponent;
  let fixture: ComponentFixture<GaleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaleryComponent]
    });
    fixture = TestBed.createComponent(GaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
