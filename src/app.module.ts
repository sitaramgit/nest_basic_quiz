import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './configs/config';
import { QuizModule } from './modules/quiz/quiz.module';
import { QuizRepository } from './modules/quiz/quiz.repository';

@Module({
  imports: [QuizModule,
  TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
