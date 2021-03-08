import { Component } from '@angular/core';
import { CoursesService } from './course/courses.service';

@Component({
  selector: 'courses', // <courses></courses>
  template: `
  <h2>{{ "This is my title: " + title + " and " + getTitle()}}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{ course }}
    </li>
  </ul>
  `
})
export class CoursesComponent {
  title: string = 'List of courses';
  courses: string[];

  // constructor() {
  //   let service = new CoursesService();
  //   this.courses = service.getCourses();
  // }

  constructor(service: CoursesService) { // the same but using dependency injection
    this.courses = service.getCourses();
  }

  getTitle(): string {
    return this.title;
  }
}
