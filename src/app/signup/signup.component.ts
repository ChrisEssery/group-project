import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  private REST_API_SERVER = "http://localhost:3000/api/users";

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {}
  signup(){
    const formData = this.signUpForm
    this.http.post(this.REST_API_SERVER, formData).toPromise()
    .then((data:any) => {
      this.errMsg = ''
      window.localStorage.setItem('auth_token', data.token)
      window.localStorage.setItem('user', JSON.stringify(data.user))
      this.router.navigate(['/play'])
    })
    .catch(err => {
      if(err.status === 409) {
        this.errMsg ="Username already exists"
      }
    })    
  }
}
