import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartConnectFourComponent } from './start-connect-four.component';

describe('StartConnectFourComponent', () => {
  let component: StartConnectFourComponent;
  let fixture: ComponentFixture<StartConnectFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartConnectFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartConnectFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
