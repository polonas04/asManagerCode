import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterAlunoComponent } from './manter-aluno.component';

describe('ManterAlunoComponent', () => {
  let component: ManterAlunoComponent;
  let fixture: ComponentFixture<ManterAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManterAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
