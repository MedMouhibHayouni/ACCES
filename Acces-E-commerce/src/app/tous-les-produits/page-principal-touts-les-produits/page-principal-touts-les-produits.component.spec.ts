import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipalToutsLesProduitsComponent } from './page-principal-touts-les-produits.component';

describe('PagePrincipalToutsLesProduitsComponent', () => {
  let component: PagePrincipalToutsLesProduitsComponent;
  let fixture: ComponentFixture<PagePrincipalToutsLesProduitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePrincipalToutsLesProduitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePrincipalToutsLesProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
