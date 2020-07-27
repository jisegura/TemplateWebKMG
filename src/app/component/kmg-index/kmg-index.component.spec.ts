import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgIndexComponent } from './kmg-index.component';

describe('KmgIndexComponent', () => {
  let component: KmgIndexComponent;
  let fixture: ComponentFixture<KmgIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
