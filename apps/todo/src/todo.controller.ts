import { Controller } from '@nestjs/common';
import { TodoService } from './todo.service';
import { GrpcMethod } from '@nestjs/microservices';
import { PostTodoDTO, Todo, Todos, TodoServiceController } from 'proto/todo';

@Controller()
export class TodoController implements TodoServiceController {
  constructor(private readonly todoService: TodoService) {}

  @GrpcMethod('TodoService', 'PostTodo')
  postTodo(postTodoDTO: PostTodoDTO): Todo {
    return this.todoService.postTodo(postTodoDTO);
  }

  @GrpcMethod('TodoService', 'GetTodos')
  getTodos(): Todos {
    return this.todoService.getTodos();
  }
}
