import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER_USER = "http://localhost:3000/api/users";
  private REST_API_SERVER_GAME = "http://localhost:3000/api/games";

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(formData: any)
  {
    return this.httpClient.post(this.REST_API_SERVER_USER, formData)
  }

  login(formData: any)
  {
    return this.httpClient.post(this.REST_API_SERVER_USER+'/session', formData)
  }

  signout(username: String){
    return this.httpClient.delete(this.REST_API_SERVER_USER+'/session')
  }

  getFriends(username: String){
    return this.httpClient.get(this.REST_API_SERVER_USER+ '/friends/' + username)
  }

  getGameHistory(username: String, limit:number){
    return this.httpClient.get(this.REST_API_SERVER_USER+'/games/'+username+'/'+limit)
  }

  getUserInfo(username: String){
    return this.httpClient.get(this.REST_API_SERVER_USER+'/info/'+username)
  }

  addAFriend(friendname: String, username:String){
    return this.httpClient.post(this.REST_API_SERVER_USER+'/friends/'+username, friendname)
  }

  addGameInstance(gameName: String, gameInfo:any){
    return this.httpClient.post(this.REST_API_SERVER_GAME+'/'+gameName, gameInfo)
  }
  getWinsLeaderboard(limit: number){
    return this.httpClient.get(this.REST_API_SERVER_GAME+'/leaderboard/'+limit)
  }
  getGameScoreLeaderboard(gameName:String, limit:number, ascend:boolean){
    return this.httpClient.get(this.REST_API_SERVER_GAME+'scores/'+gameName+'/'+limit+'/'+ascend)
  }

}
