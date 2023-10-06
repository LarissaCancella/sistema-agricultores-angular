import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAgricultoresComponent } from './list-agricultores.component';

describe('ListAgricultoresComponent', () => {
  let component: ListAgricultoresComponent;
  let fixture: ComponentFixture<ListAgricultoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAgricultoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAgricultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
