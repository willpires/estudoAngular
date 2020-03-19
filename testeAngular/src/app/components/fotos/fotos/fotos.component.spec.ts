/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FotosComponent } from './fotos.component';

describe('FotosComponent', () => {
  let component: FotosComponent;
  let fixture: ComponentFixture<FotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
