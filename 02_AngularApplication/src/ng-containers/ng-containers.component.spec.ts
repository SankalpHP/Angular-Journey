import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainersComponent } from './ng-containers.component';

describe('NgContainersComponent', () => {
  let component: NgContainersComponent;
  let fixture: ComponentFixture<NgContainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgContainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
