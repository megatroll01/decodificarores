import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecodificaEnderecoComponent } from './decodifica-endereco.component';

describe('DecodificaEnderecoComponent', () => {
  let component: DecodificaEnderecoComponent;
  let fixture: ComponentFixture<DecodificaEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecodificaEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecodificaEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
