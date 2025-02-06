import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePrincipalDetailPoduitComponent } from './page-principal-detail-poduit.component';

describe('PagePrincipalDetailPoduitComponent', () => {
  let component: PagePrincipalDetailPoduitComponent;
  let fixture: ComponentFixture<PagePrincipalDetailPoduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePrincipalDetailPoduitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePrincipalDetailPoduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
