import { Component, ViewChild, ElementRef, OnInit} from "@angular/core"
import { Itodo } from "../models/todos"

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class TodoComponent implements OnInit{
    isInEditMode: boolean = false
    editObj!: Itodo
    todosArr: Array<Itodo> = [
        {
            todoItem: 'Angular',
            todoId: '123'
        },
        {
            todoItem: 'Typescript',
            todoId: '124'
        },
        {
            todoItem: 'Javascript',
            todoId: '125'
        },
        {
            todoItem: 'NodeJs',
            todoId: '126'
        },
        {
            todoItem: 'ExpressJs',
            todoId: '127'
        }
    ]
    @ViewChild('todoControl') todoControl!: ElementRef
    constructor() {}
    
    ngOnInit(): void {}

    onTodoAdd(){
        let val: string = this.todoControl.nativeElement.value
        if(val.length > 0){
            let newTodo: Itodo = {
                todoItem: val,
                todoId: Date.now().toString()
            }
            this.todosArr.unshift(newTodo)
            this.todoControl.nativeElement.value = ''
        }
    }

    trackByFun(index: number, item: Itodo){
        return item.todoId
    }

    onRemove(id: string){
        console.log(id);
        let getIndex = this.todosArr.findIndex(t => t.todoId === id)
        this.todosArr.splice(getIndex, 1)
    }
    
    onEdit(todo: Itodo){
        console.log(todo);
        this.isInEditMode = true
        this.editObj =  todo;
        this.todoControl.nativeElement.value = todo.todoItem
    }

    onUpdate(){
        let UPDATE_ID = this.editObj.todoId
        let UPDATED_OBJ: Itodo = {
            todoItem: this.todoControl.nativeElement.value,
            todoId: UPDATE_ID
        }
        console.log(UPDATED_OBJ)
        let getIndex = this.todosArr.findIndex(t => t.todoId === UPDATE_ID)
        this.todosArr[getIndex] = UPDATED_OBJ
        this.todoControl.nativeElement.value = '';
        this.isInEditMode = false
    }
}