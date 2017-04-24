import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { NavComponent } from './nav/nav.component';
import { TimetableSectionComponent } from './timetable-section/timetable-section.component';
import { TimetableService } from './timetable.service';
import { TimetableItemComponent } from './timetable-section/timetable-item/timetable-item.component';
import { AuthorComponent } from './timetable-section/timetable-item/author/author.component';
import {
  MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule, MdSelectModule,
  MdTooltipModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdIconModule,
    MdTooltipModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdSelectModule
  ],
  declarations: [
    TimetableComponent,
    NavComponent,
    TimetableSectionComponent,
    TimetableItemComponent,
    AuthorComponent,
    SidePanelComponent
  ],
  providers: [
    TimetableService
  ]
})
export class TimetableModule { }
