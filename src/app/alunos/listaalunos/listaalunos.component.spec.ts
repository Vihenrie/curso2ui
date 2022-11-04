import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaalunosComponent } from './listaalunos.component';

describe('ListaalunosComponent', () => {
  let component: ListaalunosComponent;
  let fixture: ComponentFixture<ListaalunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaalunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaalunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
