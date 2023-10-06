import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditAgricultorComponent } from './add-edit-agricultor.component';

describe('AddEditAgricultorComponent', () => {
  let component: AddEditAgricultorComponent;
  let fixture: ComponentFixture<AddEditAgricultorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditAgricultorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditAgricultorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
