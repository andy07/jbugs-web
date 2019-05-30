import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPermissionRoleComponent } from './add-permission-role.component';

describe('AddPermissionRoleComponent', () => {
  let component: AddPermissionRoleComponent;
  let fixture: ComponentFixture<AddPermissionRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPermissionRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPermissionRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
