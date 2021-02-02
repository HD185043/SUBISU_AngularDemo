import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobServiceComponent } from './create-job-service.component';

describe('CreateJobServiceComponent', () => {
  let component: CreateJobServiceComponent;
  let fixture: ComponentFixture<CreateJobServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
