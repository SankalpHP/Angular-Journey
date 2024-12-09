import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoName = '';
  todos: WritableSignal<string[]> = signal([]);

  addTodo(todo: HTMLInputElement): void {
    const item = todo.value;
    this.todos.update((todos) => [item, ...todos]);
    todo.value = '';
    todo.focus();
  }
  removeTodo(index: number): void {
    this.todos.mutate((i) => {
      i.splice(index, 1);
    });
  }
}
