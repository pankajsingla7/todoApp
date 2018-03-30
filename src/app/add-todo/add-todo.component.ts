import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {

  public todoList: Array<string>;
  public todoInput: string;
  constructor() { }

  ngOnInit() {
    this.todoList = ["item1", "item2", "item3"]
  }

  addTodo() {
    if(this.todoInput !== '') {
    this.todoList.push(this.todoInput);
    this.todoInput = '' 
    }

  }

}
