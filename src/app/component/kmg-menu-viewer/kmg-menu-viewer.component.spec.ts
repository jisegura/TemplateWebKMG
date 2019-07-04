import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmgMenuViewerComponent } from './kmg-menu-viewer.component';

describe('KmgMenuViewerComponent', () => {
  let component: KmgMenuViewerComponent;
  let fixture: ComponentFixture<KmgMenuViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmgMenuViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmgMenuViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
