import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantLeFooterComponent } from './avant-le-footer.component';

describe('AvantLeFooterComponent', () => {
  let component: AvantLeFooterComponent;
  let fixture: ComponentFixture<AvantLeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvantLeFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvantLeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
