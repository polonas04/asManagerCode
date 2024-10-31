import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterUsuarioComponent } from './manter-usuario.component';

describe('ManterUsuarioComponent', () => {
  let component: ManterUsuarioComponent;
  let fixture: ComponentFixture<ManterUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManterUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
