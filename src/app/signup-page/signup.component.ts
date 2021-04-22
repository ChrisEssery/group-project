import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../_services/data.service';

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
    private dataService: DataService
  ) { }

  ngOnInit(): void {}

  signup(): void{
    const formData = this.signUpForm
    this.dataService.register(formData).subscribe(
      (data:any)=>{
        this.errMsg = ''
        window.localStorage.setItem('auth_token', data.token)
            window.localStorage.setItem('user', JSON.stringify(data.user))
            this.router.navigate(['/home'])
      },
      error=>{
        if(error.status === 409) {
                this.errMsg ="Username already exists"
              }
      }
    )
  }
}
