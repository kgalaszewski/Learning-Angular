import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './course/courses.service';
import { AuthorComponent } from './author/author.component';
import { AuthorsServiceService } from './authors-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService, AuthorsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
