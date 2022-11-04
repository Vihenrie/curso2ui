import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacursosComponent } from './listacursos.component';

describe('ListacursosComponent', () => {
  let component: ListacursosComponent;
  let fixture: ComponentFixture<ListacursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
