import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TimetableModule } from './timetable/timetable.module';
import { AppComponent } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';

const timetableRoutes: Routes = [
  {path: '', component: TimetableComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    TimetableModule,
    RouterModule.forRoot(timetableRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
