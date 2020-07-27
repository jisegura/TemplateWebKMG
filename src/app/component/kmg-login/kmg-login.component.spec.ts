import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgLoginComponent } from './kmg-login.component';

describe('KmgLoginComponent', () => {
  let component: KmgLoginComponent;
  let fixture: ComponentFixture<KmgLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
