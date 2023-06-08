import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodificaSenhasComponent } from './decodifica-senhas.component';

describe('DecodificaSenhasComponent', () => {
  let component: DecodificaSenhasComponent;
  let fixture: ComponentFixture<DecodificaSenhasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodificaSenhasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodificaSenhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
