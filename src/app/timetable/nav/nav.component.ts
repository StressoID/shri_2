import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public timetableService: TimetableService) { }

  ngOnInit() { }

  public filter(index) {
    this.timetableService.timetable[index].active = !this.timetableService.timetable[index].active;
  }

}
