import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  constructor(private ts:TodoService) {}
  todos:any;

  ngOnInit(): void {
    this.todos = this.ts.todoList  
  }
  removeTodo(index:any){
    this.ts.deleteTodo(index)
  }
 

}
