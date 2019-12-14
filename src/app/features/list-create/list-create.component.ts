import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/core/list.service';
import { List } from 'src/app/shared/list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {

  private title: string = '';

  constructor(
    private listService: ListService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  createList() {
    if (this.title === '') {
      alert('Please provide a title.');
      return;
    }
    let newList: List = {
      id: null,
      title: this.title,
      items: []
    }
    this.listService.addList(newList);
    this.router.navigate(['dashboard']);
    
  }

}
