import { Controller, Get } from "@nestjs/common";

@Controller() //this is basically a decorator. which is indicating that we are going to create a class which will serve as controller inside of our application
class AppController {
  @Get() //this is basically a decorator. which is indicating that we are going to create a function/method which will serve as get method inside of our function/method
  getRootRoute() {
    return "Hello Nobel! Congratulations and Go Ahead!";
  }
}
