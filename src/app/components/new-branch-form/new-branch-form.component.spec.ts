import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBranchFormComponent } from './new-branch-form.component';

describe('NewBranchFormComponent', () => {
  let component: NewBranchFormComponent;
  let fixture: ComponentFixture<NewBranchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBranchFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBranchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
