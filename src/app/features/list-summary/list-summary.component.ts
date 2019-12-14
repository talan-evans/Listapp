import { Component, OnInit, Input } from '@angular/core';
import { List } from 'src/app/shared/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-summary',
  templateUrl: './list-summary.component.html',
  styleUrls: ['./list-summary.component.css']
})
export class ListSummaryComponent implements OnInit {

  @Input() list: List

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigate() {
    this.router.navigate(['list', this.list.id])
  }

}
