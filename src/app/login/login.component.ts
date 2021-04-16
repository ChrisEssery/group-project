import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import{UserdataService} from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkLoginForm  = {
    username: '',
    password: ''
  }
  errMsg = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: UserdataService
  ) {}

  ngOnInit(): void {
  }

  login(){
    const formData = this.checkLoginForm
    this.dataService.login(formData, this.errMsg)
  }

}
