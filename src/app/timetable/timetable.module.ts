import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { NavComponent } from './nav/nav.component';
import { TimetableSectionComponent } from './timetable-section/timetable-section.component';
import { TimetableService } from './timetable.service';
import { TimetableItemComponent } from './timetable-section/timetable-item/timetable-item.component';
import { AuthorComponent } from './timetable-section/timetable-item/author/author.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimetableComponent,
    NavComponent,
    TimetableSectionComponent,
    TimetableItemComponent,
    AuthorComponent
  ],
  providers: [
    TimetableService
  ]
})
export class TimetableModule { }
