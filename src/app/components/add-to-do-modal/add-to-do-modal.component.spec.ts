import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToDoModalComponent } from './add-to-do-modal.component';

describe('AddToDoModalComponent', () => {
  let component: AddToDoModalComponent;
  let fixture: ComponentFixture<AddToDoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToDoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToDoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
