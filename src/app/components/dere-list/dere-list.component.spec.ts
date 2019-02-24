import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DereListPage } from './dere-list.page';

describe('DereListPage', () => {
  let component: DereListPage;
  let fixture: ComponentFixture<DereListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DereListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DereListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
