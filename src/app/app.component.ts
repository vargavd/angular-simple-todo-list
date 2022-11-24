import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // NEW TODO VALUES
  newTodoName: string = '';
  newTodoPriority: string = 'Low';

  // TODO LISTS
  lowTodos: string[] = [
    'Low Todo 1',
    'Low Todo 2',
  ];
  mediumTodos: string[] = [
    'Medium Todo'
  ];
  highTodos: string[] = [
    'High Todo 1',
    'High Todo 2'
  ];

  // HELPER VARIABLES
  inputChangedAlready = false;

  // HELPER FUNCS
  getPriorityButtonClass(priority:string) {
    return { 
      'btn': true,
      'btn-primary': this.newTodoPriority === priority ,
      'btn-outline-primary': this.newTodoPriority !== priority
    };
  };

  // UI EVENT HANDLERS
  inputHandler($event:InputEvent) {
    this.inputChangedAlready = true;

    // this is only for future reference (for myself)
    console.log(($event.target as HTMLInputElement).value);
  };
  prioritySelected(priority:string) {
    this.newTodoPriority = priority;
  };
  addNewTodo() {
    if (this.newTodoPriority === 'Low') {
      this.lowTodos.push(this.newTodoName);
    }

    if (this.newTodoPriority === 'Medium') {
      this.mediumTodos.push(this.newTodoName);
    }

    if (this.newTodoPriority === 'High') {
      this.highTodos.push(this.newTodoName);
    }

    // RESET FORM
    this.newTodoName = '';
    this.newTodoPriority = 'Low';
    this.inputChangedAlready = false;
  };

}
