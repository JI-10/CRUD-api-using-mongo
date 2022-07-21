import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true,forbidNonWhitelisted:false}));
  try {
    await app.listen(3000,()=>{
    console.log("listening on port 3000!");
  });
  } catch (error) {
    console.log(error)
  }
  
}
bootstrap();
