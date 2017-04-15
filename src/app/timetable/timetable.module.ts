import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { TimetableRouterModule } from './timetable-router.module';

@NgModule({
  imports: [
    CommonModule,
    TimetableRouterModule
  ],
  declarations: [TimetableComponent]
})
export class TimetableModule { }
