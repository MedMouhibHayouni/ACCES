import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideProduitsComponent } from './slide-produits.component';

describe('SlideProduitsComponent', () => {
  let component: SlideProduitsComponent;
  let fixture: ComponentFixture<SlideProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
