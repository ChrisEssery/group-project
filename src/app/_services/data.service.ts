import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private REST_API_SERVER_USER = "http://localhost:3000/api/users";
  private REST_API_SERVER_GAME = "http://localhost:3000/api/games";

  constructor(private httpClient: HttpClient) { }

  getFriends(username: String){
    username= username.replace(/['"]+/g, '');
    return this.httpClient.get(this.REST_API_SERVER_USER+ '/friends/' + username)
  }

  getGameHistory(username: String, limit:number){
    username= username.replace(/['"]+/g, '');
    return this.httpClient.get(this.REST_API_SERVER_USER+'/games/'+username+'/'+limit)
  }

  getUserInfo(username: String){
    username= username.replace(/['"]+/g, '');
    return this.httpClient.get(this.REST_API_SERVER_USER+'/info/'+username)
  }

  addAFriend(friendname: String, username:String){
    username= username.replace(/['"]+/g, '');
    return this.httpClient.post(this.REST_API_SERVER_USER+'/friends/'+username, friendname)
  }

  addGameInstance(gameName: String, gameInfo:any){
    gameName= gameName.replace(/['"]+/g, '');
    return this.httpClient.post(this.REST_API_SERVER_GAME+'/'+gameName, gameInfo)
  }

  getWinsLeaderboard(limit: number){
    return this.httpClient.get(this.REST_API_SERVER_USER+'/leaderboard/'+limit)
  }

  getGameScoreLeaderboard(gameName:String, limit:number, ascend:number){
    gameName= gameName.replace(/['"]+/g, '');
    return this.httpClient.get(this.REST_API_SERVER_GAME+'scores/'+gameName+'/'+limit+'/'+ascend)
  }

}
