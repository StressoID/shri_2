import { Component, OnInit } from '@angular/core';
import { TimetableService } from './timetable.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  constructor(public timeTableSection: TimetableService) { }

  ngOnInit() {
  }

}
