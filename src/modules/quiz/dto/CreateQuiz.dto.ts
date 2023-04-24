import { IsInt, IsNotEmpty, Length, Max, Min } from "class-validator"

export class CreateQuizDto {
    @IsNotEmpty({message: "required"})
    @Length(5, 50)
    title: string

    @Length(5, 100)
    @IsNotEmpty({message: "required"})
    description: string
}