import { Component, OnInit } from '@angular/core';
import { TimetableService } from '../timetable.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss']
})
export class SidePanelComponent implements OnInit {

  public sidePanel: Array<ISidePanel> = [{
    label: 'Добавить лекцию',
    icon: 'schedule',
    active: false,
    formFields: [
      {
        name: 'title',
        title: 'Название',
        value: ''
      },
      {
        name: 'date',
        title: 'Дата',
        type: 'date',
        value: ''
      },
      {
        name: 'schools',
        title: 'Школа',
        type: 'select',
        value: ''
      },
      {
        name: 'authors',
        title: 'Автор',
        type: 'select',
        value: ''
      },
      {
        name: 'classrooms',
        title: 'Аудитория',
        type: 'select',
        value: ''
      }
    ],
    formHandler: () => {
      console.log(this.sidePanel[0]);
      this.timetableService.addOrReplaceLecture(
        this.sidePanel[0].formFields[0].value,
        this.sidePanel[0].formFields[1].value,
        this.sidePanel[0].formFields[2].value,
        this.sidePanel[0].formFields[3].value,
        this.sidePanel[0].formFields[4].value,
      );
      this.closeBlock(0);
      console.log(this.timetableService.lectures);
    }
  }, {
    label: 'Добавить аудиторию',
    icon: 'group',
    active: false,
    formFields: [
      {
        name: 'title',
        title: 'Название',
        value: ''
      },
      {
        name: 'students',
        title: 'Описание',
        value: ''
      },
      {
        name: 'capacity',
        title: 'Вместимость',
        type: 'number',
        value: ''
      }
    ],
    formHandler: () => {
      this.timetableService.addOrReplaceRoom(
        this.sidePanel[1].formFields[0].value,
        this.sidePanel[1].formFields[1].value,
        this.sidePanel[1].formFields[2].value,
      )
      this.closeBlock(1);
    }
  }, {
    label: 'Добавить школу',
    icon: 'school',
    active: false,
    formFields: [
      {
        name: 'title',
        title: 'Название',
        value: ''
      },
      {
        name: 'students',
        title: 'Количество студентов',
        type: 'number',
        value: ''
      },
      {
        name: 'description',
        title: 'Описание',
        value: ''
      }
    ],
    formHandler: () => {
      this.timetableService.addOrReplaceSchool(
        this.sidePanel[2].formFields[0].value,
        this.sidePanel[2].formFields[1].value,
        this.sidePanel[2].formFields[2].value,
      );
      this.closeBlock(2);
    }
  }];

  constructor(public timetableService: TimetableService) {
  }

  ngOnInit() {
  }

  public openBlock(index) {
    this.sidePanel.forEach((el, i) => {
      if (index !== i) {
        el.active = false
      }
    });
    this.sidePanel[index].active = !this.sidePanel[index].active;
  }

  public closeBlock(index) {
    this.sidePanel[index].formFields.forEach((el) => {
      el.value = '';
    });
    this.sidePanel[index].active = !this.sidePanel[index].active;
  }

  public handle(item) {
    console.log(item);
  }
}

interface ISidePanel {
  label: string;
  icon: string;
  active: boolean;
  formFields: Array<IFormField>;
  formHandler: Object;
}

interface IFormField {
  name: string;
  title: string;
  type?: string;
  value: string;
}
