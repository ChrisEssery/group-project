import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  friends=[
    "aaa",
    "bbb",
    "ccc",
    "ddd",
    "eee",
    "fff"
]
games:any=[
  {
      "playedWith": [
          "bbb"
      ],
      "_id": "6080bfd26216e5aaeee2049d",
      "gamename": "Memory Game",
      "result": "win",
      "date": "2021-04-22T00:14:10.968Z"
  },
  {
      "playedWith": [
          "bbb"
      ],
      "_id": "6080bfff6216e5aaeee204a2",
      "gamename": "Connect 4",
      "result": "win",
      "date": "2021-04-22T00:14:55.965Z"
  }
]

  constructor(
  ) {}

  ngOnInit(): void {
    this.games.forEach((element:any) => {
      element.date = element.date.substring(5, 10)
    });
  }
}
