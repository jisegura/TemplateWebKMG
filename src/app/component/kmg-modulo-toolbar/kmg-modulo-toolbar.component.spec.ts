import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgModuloToolbarComponent } from './kmg-modulo-toolbar.component';

describe('KmgModuloToolbarComponent', () => {
  let component: KmgModuloToolbarComponent;
  let fixture: ComponentFixture<KmgModuloToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgModuloToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgModuloToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
