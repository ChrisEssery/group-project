import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameplayConnectFourComponent } from './gameplay-connect-four.component';

describe('GameplayConnectFourComponent', () => {
  let component: GameplayConnectFourComponent;
  let fixture: ComponentFixture<GameplayConnectFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameplayConnectFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameplayConnectFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
