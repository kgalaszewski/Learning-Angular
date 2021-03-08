import { Component, OnInit } from '@angular/core';
import { AuthorsServiceService } from '../authors-service.service';

@Component({
  selector: 'authors',
  template: `
  <h1>Authors !</h1>
  <ul>
    <li *ngFor="let authorName of authorNames">
      {{ authorName }}
    </li>
  </ul>
  `
})
export class AuthorComponent implements OnInit {

  authorNames: string[];

  constructor(private service: AuthorsServiceService) {
    this.authorNames = service.getAuthorsNames();
  }

  ngOnInit(): void {
  }

}
