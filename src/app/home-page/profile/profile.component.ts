import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = JSON.parse(window.localStorage.getItem('user')|| '{}')

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  signout (e: { preventDefault: () => void; }) {
    console.log(this.user)
    e.preventDefault()
    this.http.delete('http://localhost:3000/api/users/session')
      .toPromise()
      .then(data => {
        window.localStorage.removeItem('auth_token')
        this.router.navigate(['/login'])
      })
      .catch(err => {
        window.alert('Log out failed. Please try again')
      })
  }
}
