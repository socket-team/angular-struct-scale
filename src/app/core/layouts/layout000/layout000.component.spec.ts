import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout000Component } from './layout000.component';

describe('Layout000Component', () => {
  let component: Layout000Component;
  let fixture: ComponentFixture<Layout000Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout000Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Layout000Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
