import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLawPageComponent } from './request-law-page.component';

describe('RequestLawPageComponent', () => {
  let component: RequestLawPageComponent;
  let fixture: ComponentFixture<RequestLawPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestLawPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLawPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
