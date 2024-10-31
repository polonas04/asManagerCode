import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterProfessorComponent } from './manter-professor.component';

describe('ManterProfessorComponent', () => {
  let component: ManterProfessorComponent;
  let fixture: ComponentFixture<ManterProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManterProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManterProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
