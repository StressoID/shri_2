export interface ILecture {
  id: number;
  title: string;
  date: string;
  author: IAuthor;
  classroom: IClassroom;
  school: ISchool;
}

export interface ISchool {
  id: number;
  title: string;
  active: boolean;
  students: number;
}

export interface IAuthor {
  id: number;
  title: string;
  description: string;
  photo: string;
}

export interface IClassroom {
  id: number;
  title: string;
  capacity: number;
  description: string;
}
