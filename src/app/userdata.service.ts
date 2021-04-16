import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import {Router} from '@angular/router';
enum Result {OK, CONFLICT, ERROR}

@Injectable({
  providedIn: 'root'
})

export class UserdataService {

  private REST_API_SERVER = "http://localhost:3000/api/users";

  constructor(private httpClient: HttpClient, private router: Router) { }

  public getAllUsers(){
    return this.httpClient.get(this.REST_API_SERVER)
  }
}
//currentuser = JSON.Stringify(window.localStorage.getItem('username'))