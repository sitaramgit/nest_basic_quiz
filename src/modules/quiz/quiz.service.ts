import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
    constructor(@InjectRepository(QuizRepository) private quizRepo: QuizRepository){

    }
    allQuiz(){
        return [1,2,3,4,5,6,'from service23']
    }
    async createQuiz(quizData: CreateQuizDto){
        console.log(quizData, '1111111')
        return await this.quizRepo.save(quizData)
    }
}
