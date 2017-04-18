import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthorComponent } from './author/author.component';

@Component({
  selector: 'app-timetable-item',
  templateUrl: './timetable-item.component.html',
  styleUrls: ['./timetable-item.component.scss']
})
export class TimetableItemComponent implements OnInit {
  @Input() lectures: Array<Object>;
  @ViewChild(AuthorComponent) inputComponent: AuthorComponent;
  public author: boolean = false;

  constructor() { }

  ngOnInit() { }

  public toggleAuthor() {
    this.author = !this.author;
  }

}
