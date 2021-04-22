import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

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
    private dataService: DataService
  ) {}

  ngOnInit(): void {
  }
  
  login(){
    const formData = this.checkLoginForm 
    this.dataService.login(formData).subscribe(
      (data:any)=>{
        this.errMsg = ''
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/home'])
      },
      error=>{
        if(error.status === 401) {
                this.errMsg ="invalid username/password"
              }
      }
    )

  }
}
