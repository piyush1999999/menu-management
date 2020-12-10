import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  todoDetails = [
    { id : 1, date : '10/12/2020', title : 'Monday', description : 'Idli' },
    { id : 2, date : '11/12/2020', title : 'Tuesday', description : 'Chicken'},
    { id : 3, date : '12/12/2020', title : 'Wednesday', description : 'Paneer'},
    { id : 4, date : '13/12/2020', title : 'Thrusday', description : 'Pasta'}
  ]

  createComponent(id, date,title, description) {
    this.todoDetails.push({id, date,title, description})
  }

}