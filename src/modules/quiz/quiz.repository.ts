import { Injectable } from "@nestjs/common";
import { DataSource, EntityRepository, Repository } from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";


// @EntityRepository(Quiz)
@Injectable()
export class QuizRepository extends Repository<Quiz> {
    constructor(private dataSource: DataSource) {
        super(Quiz, dataSource.createEntityManager());
      }

    async createQuiz(postData: CreateQuizDto){
        console.log(postData, '234234')
        const post = this.create(postData);
        console.log(post);
          await this.create(post);
          console.log(post);
          return post;
    }
    
}