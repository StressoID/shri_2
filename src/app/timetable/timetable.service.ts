import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TimetableService {

  public timetable;

  constructor(private http: Http) {
    http.get('/src/app/timetable/timetable.mock.json').subscribe(data => {
      this.timetable = data.json();
    });
  }

}
