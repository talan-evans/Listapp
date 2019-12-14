import { Component, OnInit } from '@angular/core';
import { List } from 'src/app/shared/list.model';
import { ListService } from 'src/app/core/list.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {

  private list: List;
  private newItem: string = '';

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    let id: number = +this.route.snapshot.paramMap.get('id');
    this.list = this.listService.getListById(id);
  }

  goBack() {
    this.router.navigate(['dashboard']);
  }

  removeItem(item: string) {
    this.listService.removeItemFromList(this.list.id, item);
  }

  addItem() {
    if (this.newItem === '') {
      alert('Please provide a new item.')
      return;
    }
    this.listService.addItemToList(this.list.id, this.newItem);
  }

}
