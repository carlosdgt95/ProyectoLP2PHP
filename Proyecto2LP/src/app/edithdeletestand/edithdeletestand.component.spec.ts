import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithdeletestandComponent } from './edithdeletestand.component';

describe('EdithdeletestandComponent', () => {
  let component: EdithdeletestandComponent;
  let fixture: ComponentFixture<EdithdeletestandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdithdeletestandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdithdeletestandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
