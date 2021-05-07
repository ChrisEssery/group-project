import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectFourContainerComponent } from './connect-four-container.component';

describe('ConnectFourContainerComponent', () => {
  let component: ConnectFourContainerComponent;
  let fixture: ComponentFixture<ConnectFourContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectFourContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectFourContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
