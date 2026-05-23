import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseComponents } from './base-components';

describe('BaseComponents', () => {
  let component: BaseComponents;
  let fixture: ComponentFixture<BaseComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
