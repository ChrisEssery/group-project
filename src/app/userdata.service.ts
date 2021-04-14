import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  private REST_API_SERVER = "http://localhost:3000/users";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getAllUsers(){
    return this.httpClient.get(this.REST_API_SERVER)
  }

  // create a new user
  public addUser(formData:any, errMsg:String){
    this.httpClient.post(this.REST_API_SERVER, formData)
      .toPromise()
      .then((data: any) => {
        errMsg = ''
        //deal with user tokens
        window.localStorage.setItem('auth_token', data.token)
        window.localStorage.setItem('user_info', JSON.stringify(data.user))
        //redirects to the main play page
        this.router.navigate(['/play'])
        console.log("user added")
      })
      .catch(err => {
        //if the username already exists, send the alert
        if (err.status === 409) {
          errMsg= 'Username already exists'
        }
      })
  }
}