import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgModuloDashboardComponent } from './kmg-modulo-dashboard.component';

describe('KmgModuloDashboardComponent', () => {
  let component: KmgModuloDashboardComponent;
  let fixture: ComponentFixture<KmgModuloDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgModuloDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgModuloDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
