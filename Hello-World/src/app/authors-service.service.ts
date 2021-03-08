export class AuthorsServiceService {
  private authors: Author[];

  constructor() {
    this.authors = this.generateAuthors();
  }

  getAuthorsNames(): string[] {
    let names: string[] = [];

    this.authors.forEach(author => {
      names.push(author.name);
    });

    return names;
  }

  private generateAuthors(): Author[] {
    let authors = [new Author('Janek', 'JakasKsiazka'), new Author('Mietek')];
    return authors;
  }

}

class Author {
  constructor(public name: string, public book?: string) {

  }
}
