import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {
    constructor(private quizService: QuizService, private readonly quizRepo: QuizRepository){}

    @Get("/")
    getAllQuiz(){
        return this.quizService.allQuiz();
    }

    @Post("/")
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto ){
        return await this.quizService.createQuiz(quizData);
    }
}
