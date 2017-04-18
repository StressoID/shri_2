import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-timetable-section',
  templateUrl: './timetable-section.component.html',
  styleUrls: ['./timetable-section.component.scss']
})
export class TimetableSectionComponent implements OnInit {

  constructor(public timetableService: TimetableService) { }

  ngOnInit() {
  }

}
