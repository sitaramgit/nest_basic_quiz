import { Injectable } from '@nestjs/common';

@Injectable()
export class QuizService {
    allQuiz(){
        return [1,2,3,4,5,6,'from service23']
    }
}
