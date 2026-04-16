import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './shared/components/todos/todos.component';
import { StudentTaskComponent } from './shared/components/student-task/student-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    StudentTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
