import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgPageHeaderComponent } from './kmg-page-header.component';

describe('KmgPageHeaderComponent', () => {
  let component: KmgPageHeaderComponent;
  let fixture: ComponentFixture<KmgPageHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgPageHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgPageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
