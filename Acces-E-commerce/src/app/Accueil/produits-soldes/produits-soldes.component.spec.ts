import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitsSoldesComponent } from './produits-soldes.component';

describe('ProduitsSoldesComponent', () => {
  let component: ProduitsSoldesComponent;
  let fixture: ComponentFixture<ProduitsSoldesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitsSoldesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitsSoldesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
