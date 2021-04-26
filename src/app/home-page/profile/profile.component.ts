import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../_services/data.service';
import { TokenStorageService } from '../../_services/token-storage.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser =''
  friends=[]
  games:any=[]
  info:any={}

  constructor(
    private dataService: DataService,
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  ngOnInit(): void {
    this.currentUser= this.tokenStorageService.getUser()
    this.dataService.getUserInfo(this.currentUser).subscribe(
      (data:any) => {
        this.info=data
      },
      error=>{
        console.log("fail to load the personal info")
      }
    )
    this.dataService.getFriends(this.currentUser).subscribe(
      (data:any)=>{
        this.friends=data.friends
      },
      error=>{
        console.log("fail to load the friendlist")
        console.log(error)
      }
    )
    this.dataService.getGameHistory(this.currentUser, 10).subscribe(
      (data:any)=>{
        this.games=data.gamesPlayed.reverse()
        this.games.forEach((element:any) => {
          element.date = element.date.substring(5, 10)
        });
      },
      error=>{
        console.log("fail to load the game history")
      }
    )
  }
}
