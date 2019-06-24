import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgModulosComponent } from './kmg-modulos.component';

describe('KmgModulosComponent', () => {
  let component: KmgModulosComponent;
  let fixture: ComponentFixture<KmgModulosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgModulosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
