import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { PostTodoDTO } from 'proto/todo';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  postTodo(@Body() postTodoDTO: PostTodoDTO) {
    return this.appService.postTodo(postTodoDTO);
  }
  @Get()
  getTodos() {
    return this.appService.getTodos();
  }
}
