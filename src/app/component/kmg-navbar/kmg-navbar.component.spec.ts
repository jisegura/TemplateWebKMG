import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgNavbarComponent } from './kmg-navbar.component';

describe('KmgNavbarComponent', () => {
  let component: KmgNavbarComponent;
  let fixture: ComponentFixture<KmgNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
