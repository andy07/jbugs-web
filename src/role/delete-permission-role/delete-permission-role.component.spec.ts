import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePermissionRoleComponent } from './delete-permission-role.component';

describe('DeletePermissionRoleComponent', () => {
  let component: DeletePermissionRoleComponent;
  let fixture: ComponentFixture<DeletePermissionRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePermissionRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePermissionRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
