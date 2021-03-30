import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm = {
    email: '',
    password: '',
    username: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  signup(){
    console.log("signed up")
  }

}
