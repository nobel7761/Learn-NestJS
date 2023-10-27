import { Get } from "@nestjs/common";
import { Controller } from "@nestjs/common";

/* //! localhost:300/
@Controller() //this is basically a decorator. which is indicating that we are going to create a class which will serve as controller inside of our application
export class AppController {
  @Get() //this is basically a decorator. which is indicating that we are going to create a function/method which will serve as get method inside of our function/method
  getRootRoute() {
    return "Hello Nobel! Congratulations and Go Ahead!!";
  }
} */

//! localhost:300/app
@Controller("/app")
export class AppController {
  //! localhost:300/app/hello
  @Get("/hello")
  getRootRoute() {
    return "Hello Nobel! Congratulations and Go Ahead!!";
  }

  //! localhost:300/app/another
  @Get("/another")
  getAnotherRoute() {
    return "Hello Nobel! This is another route!!!";
  }
}
