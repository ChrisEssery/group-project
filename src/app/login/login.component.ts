import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
  private REST_API_SERVER = "http://localhost:3000/api/users";
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  ngOnInit(): void {
  }

  login(){
    const formData = this.checkLoginForm
    this.http.post(this.REST_API_SERVER+'/session', formData).toPromise()
      .then((data:any) => {
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user', JSON.stringify(data.user))
        this.router.navigate(['/play'])
      })
      .catch(err =>{
        if(err.status === 401){
          this.errMsg = "invalid username/password"
        }
      })
  }
}
