import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JitsiTwoComponent } from './jitsi-two.component';

describe('JitsiTwoComponent', () => {
  let component: JitsiTwoComponent;
  let fixture: ComponentFixture<JitsiTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JitsiTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JitsiTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
