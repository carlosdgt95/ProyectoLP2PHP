import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstandComponent } from './addstand.component';

describe('AddstandComponent', () => {
  let component: AddstandComponent;
  let fixture: ComponentFixture<AddstandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
