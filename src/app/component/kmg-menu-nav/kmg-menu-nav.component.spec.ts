import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgMenuNavComponent } from './kmg-menu-nav.component';

describe('KmgMenuNavComponent', () => {
  let component: KmgMenuNavComponent;
  let fixture: ComponentFixture<KmgMenuNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgMenuNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgMenuNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
