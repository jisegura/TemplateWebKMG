import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgModuloComponent } from './kmg-modulo.component';

describe('KmgModuloComponent', () => {
  let component: KmgModuloComponent;
  let fixture: ComponentFixture<KmgModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
