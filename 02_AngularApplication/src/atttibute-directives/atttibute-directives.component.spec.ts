import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtttibuteDirectivesComponent } from './atttibute-directives.component';

describe('AtttibuteDirectivesComponent', () => {
  let component: AtttibuteDirectivesComponent;
  let fixture: ComponentFixture<AtttibuteDirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtttibuteDirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtttibuteDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
