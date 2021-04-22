import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'
import { DataService } from '../../_services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user = JSON.parse(window.localStorage.getItem('user')|| '{}')

  constructor(
    private http: HttpClient,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
  }
  signout (e: { preventDefault: () => void; }) {
    console.log(this.user)
    e.preventDefault()
    this.dataService.signout(this.user).subscribe(
      data => {
        window.localStorage.removeItem('auth_token')
        this.router.navigate(['/login'])
      },
      error => {
        window.alert('Log out failed. Please try again')
      })
  }

}
