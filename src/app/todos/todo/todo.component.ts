import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor() {}
  @Input() public todoInput: Todo;

  @Output() public delete = new EventEmitter<Todo>();
/* < w tym piszemy typ danych który bedzie zwracał> */

  public onDeleteClick(){
    this.delete.emit(this.todoInput);

  }
  
}
