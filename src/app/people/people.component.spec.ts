import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { peopleComponent } from './people.component';

describe('peopleComponent', () => {
  let component: peopleComponent;
  let fixture: ComponentFixture<peopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ peopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(peopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
