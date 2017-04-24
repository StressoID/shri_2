import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IAuthor, IClassroom, ILecture, ISchool } from './timetable.interface';

@Injectable()
export class TimetableService {

  public schools: Array<ISchool> = [];
  public lectures: Array<ILecture> = [];
  public classrooms: Array<IClassroom> = [];
  public authors: Array<IAuthor> = [];

  constructor(private http: Http) {
    http.get('/src/app/timetable/lectures.mock.json').subscribe(data => {
      this.lectures = data.json();
      this.lecSchoolByRange(2, '10.07.2017 11:00', '10.07.2017 13:00');
      this.lecRoomByRange(2, '10.07.2017 11:00', '10.07.2017 13:00');
    });
    http.get('/src/app/timetable/classrooms.mock.json').subscribe(data => {
      this.classrooms = data.json();
      console.log(this.getRoomByID(1));
    });
    http.get('/src/app/timetable/authors.mock.json').subscribe(data => {
      this.authors = data.json();
      console.log(this.getAuthorByID(1));

    });
    http.get('/src/app/timetable/schools.mock.json').subscribe(data => {
      this.schools = data.json();
      console.log(this.getSchoolByID(2));
    });
  }

  public lecSchoolByRange(schoolID, by, to) {
    let dateLec = [];
    this.lectures.forEach((elem) => {
      if (schoolID === elem.school.id) {
        let uDate = new Date(elem.date).getTime();
        if (uDate >= new Date(by).getTime() && uDate <=new Date(to).getTime()) {
          dateLec.push(elem);
        }
      }
    });
    return dateLec;
  }

  public lecRoomByRange(roomID, by, to) {
    let roomLec = [];
    this.lectures.forEach((elem) => {
      if (roomID === elem.classroom.id) {
        let uDate = new Date(elem.date).getTime();
        if (uDate >= new Date(by).getTime() && uDate <=new Date(to).getTime()) {
          roomLec.push(elem);
        }
      }
    });
    console.log(roomLec);
    return roomLec;
  }

  public addOrReplaceSchool(title, active, students, id = null) {
    if (id) {
      let index = this.schools.findIndex((el, i, arr) => {
        return el.id === id;
      });
      this.schools[index] = {id, title, active, students};
      return this.schools;
    }

    return this.schools.push({id: Date.now(), title, active, students});
  }

  public addOrReplaceRoom(title, capacity, description, id = null) {
    if (id) {
      let index = this.classrooms.findIndex((el, i, arr) => {
        return el.id === id;
      });
      this.classrooms[index] = {id, title, capacity, description};
      return this.classrooms;
    }

    return this.classrooms.push({id: Date.now(), title, capacity, description})
  }

  public addOrReplaceAuthor(title, description, photo, id = null){
    if (id) {
      let index = this.authors.findIndex((el, i, arr) => {
        return el.id === id;
      });
      this.authors[index] = {id, title, description, photo};
      return this.authors;
    }

    return this.authors.push({id: Date.now(), title, description, photo});
  }

  public addOrReplaceLecture(title, date, schoolID, authorID, roomID, id = null) {
    if (id) {
      let index = this.lectures.findIndex((el, i, arr) => {
        return el.id === id;
      });
      this.lectures[index] = {
        id,
        title,
        author: this.getAuthorByID(authorID),
        date,
        classroom: this.getRoomByID(roomID),
        school: this.getSchoolByID(schoolID)
      };
      return this.lectures;
    }

    return this.lectures.push({
      id: Date.now(),
      title,
      author: this.getAuthorByID(authorID),
      date,
      classroom: this.getRoomByID(roomID),
      school: this.getSchoolByID(schoolID)
    });
  }

  public getAuthorByID(authorID) {
    return this.authors.find((el, i, arr) => {
      return el.id === authorID;
    });
  }
  public getRoomByID(roomID) {
    return this.classrooms.find((el, i, arr) => {
      return el.id === roomID;
    });
  }
  public getSchoolByID(schoolID) {
    console.log(schoolID);
    return this.schools.find((el, i, arr) => {
      return el.id === schoolID;
    });
  }

}
