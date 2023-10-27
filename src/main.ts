import { Controller, Module, Get } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller() //this is basically a decorator. which is indicating that we are going to create a class which will serve as controller inside of our application
class AppController {
  @Get() //this is basically a decorator. which is indicating that we are going to create a function/method which will serve as get method inside of our function/method
  getRootRoute() {
    return "Hello Nobel! Congratulations and Go Ahead!";
  }
}

@Module({
  controllers: [AppController], //define which controller will be used for this module
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);

  console.log("Server Connected!");
}

bootstrap();
