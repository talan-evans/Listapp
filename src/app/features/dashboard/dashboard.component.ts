import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/shared/list.model';
import { ListService } from 'src/app/core/list.service';
import { LoginService } from 'src/app/core/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private lists: List[];
  constructor(
    private listService: ListService,
    private loginService: LoginService,
    private router: Router
  ) {
    this.lists = [];
  }

  ngOnInit() {
    this.lists = this.listService.getAllLists();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['login']);
  }

}
