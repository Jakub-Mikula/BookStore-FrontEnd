import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Book } from "../../models/book.model";
import { BookService } from "../../services/book.service";

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  errorMessage : string = "";


  @Input() book : Book = new Book();
  @Output() save = new EventEmitter<any>
  constructor(private bookService : BookService) {

  }

  saveBook(){
    this.bookService.saveBook(this.book).subscribe(data => {
      this.save.emit(data);
      $('#bookModal').modal('hide');
    }, error =>
    this.errorMessage = "Unexpected error occurred");
    console.log("Unexpected error occurred");
  }

  showBookModal(){
    $('#bookModal').modal('show');
  }
}
