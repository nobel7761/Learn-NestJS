import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

@Module({
  controllers: [AppController], //define which controller will be used for this module
})
export class AppModule {}
