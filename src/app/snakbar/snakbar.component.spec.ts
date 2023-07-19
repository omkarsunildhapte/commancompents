import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakbarComponent } from './snakbar.component';

describe('SnakbarComponent', () => {
  let component: SnakbarComponent;
  let fixture: ComponentFixture<SnakbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnakbarComponent]
    });
    fixture = TestBed.createComponent(SnakbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
