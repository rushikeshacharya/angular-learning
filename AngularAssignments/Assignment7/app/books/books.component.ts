import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html'
})
export class BooksComponent implements OnInit {
public books = ['Learning Android' , 'Beginning Node.js', 'Artificial Intelligence: A Modern Approach', 'The Human Face of Big Data'];
  constructor() { }

  ngOnInit() {
  }

}
