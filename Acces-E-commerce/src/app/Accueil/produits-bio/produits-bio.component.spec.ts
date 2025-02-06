import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsBioComponent } from './produits-bio.component';

describe('ProduitsBioComponent', () => {
  let component: ProduitsBioComponent;
  let fixture: ComponentFixture<ProduitsBioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsBioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
