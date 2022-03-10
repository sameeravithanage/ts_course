import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface ToDo {
  id: number
  title: string
  completed: boolean
}

axios.get(url).then(respone =>{
  const todo = respone.data as ToDo
  const id = todo.id
  const title = todo.title
  const completed = todo.completed

  logTodo(id,title,completed)
})

const logTodo = (id:number, title:string, completed:boolean) =>{
  console.log(`
    The todo with ID: ${id}
    Has a title: ${title}
    is it finished? ${completed}
  `)
}