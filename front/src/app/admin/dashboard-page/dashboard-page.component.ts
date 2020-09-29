import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/service/user.service'

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  constructor(
    private userService:UserService,
  ) { }

  ngOnInit(): void {
  }

  getUsers(){
    this.userService.GetUsers().subscribe()
  }

}
