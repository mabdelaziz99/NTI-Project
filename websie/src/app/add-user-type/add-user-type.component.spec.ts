import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserTypeComponent } from './add-user-type.component';

describe('AddUserTypeComponent', () => {
  let component: AddUserTypeComponent;
  let fixture: ComponentFixture<AddUserTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUserTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
