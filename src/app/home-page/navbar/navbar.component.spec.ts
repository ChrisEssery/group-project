import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { tick } from '@angular/core/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //it('should navigate', () => {
  //  expect(DebugElement.query(By.css('#home')).nativeElement.attribute('routerLink')).toEqual('/home');
  //});

  it('should signout when signout is clicked', fakeAsync ((); void => {
    spyOn(component, 'signout');
    const signoutLink = fixture.debugElement.query(By.css('#signout-link'));
    signoutLink.triggerEventHandler('click', null);
    tick();
    fixture.detectChanges();
    expect(component.signout).toHaveBeenCalled();
  }));
});
