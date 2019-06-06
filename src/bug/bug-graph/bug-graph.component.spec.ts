import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BugGraphComponent } from './bug-graph.component';

describe('BugGraphComponent', () => {
  let component: BugGraphComponent;
  let fixture: ComponentFixture<BugGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BugGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BugGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
