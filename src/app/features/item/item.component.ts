import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  template: `
    <div class="item-wrapper">
      <div (click)="removeItem()">{{ item }}</div>
    </div>
    `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: string;
  @Output() clickEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.clickEvent.emit(this.item);
  }

}
