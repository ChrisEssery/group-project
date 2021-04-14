import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{UserdataService} from '../userdata.service';

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

  errMsg = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: UserdataService
  ) { }

  ngOnInit(): void {}
  signup(){
    const formData = this.signUpForm
    this.dataService.addUser(formData, this.errMsg)
  }

}
