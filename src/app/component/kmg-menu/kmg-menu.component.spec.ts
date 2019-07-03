import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgMenuComponent } from './kmg-menu.component';

describe('KmgMenuComponent', () => {
  let component: KmgMenuComponent;
  let fixture: ComponentFixture<KmgMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
