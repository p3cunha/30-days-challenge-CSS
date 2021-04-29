import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconLayersComponent } from './icon-layers.component';

describe('IconLayersComponent', () => {
  let component: IconLayersComponent;
  let fixture: ComponentFixture<IconLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconLayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
