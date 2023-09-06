import { Component } from '@angular/core';
import { list } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
title!: string;
description!: string;
addTodo() {
  if(this.title !='' && this.description!='')
  {
this.todo.push(
  {
  title:this.title ,
  description:this.description ,
  }
)
  }
  this.title='';
  this.description= '';
}
remove(i: any)
{

  this.todo.splice(i, 1);
}

todo:list[]=[]
}
