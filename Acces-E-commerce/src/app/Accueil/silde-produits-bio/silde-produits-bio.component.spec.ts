import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SildeProduitsBioComponent } from './silde-produits-bio.component';

describe('SildeProduitsBioComponent', () => {
  let component: SildeProduitsBioComponent;
  let fixture: ComponentFixture<SildeProduitsBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SildeProduitsBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SildeProduitsBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
