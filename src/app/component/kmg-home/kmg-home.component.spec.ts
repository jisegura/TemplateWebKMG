import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgHomeComponent } from './kmg-home.component';

describe('KmgHomeComponent', () => {
  let component: KmgHomeComponent;
  let fixture: ComponentFixture<KmgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
