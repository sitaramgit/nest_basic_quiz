import { IsInt, IsNotEmpty, Length, Max, Min } from "class-validator"

export class CreateQuizDto {
    @IsNotEmpty({message: "required"})
    @Length(5, 50)
    name: string

    @IsInt()
    @Min(18)
    @Max(60)
    @IsNotEmpty({message: "required"})
    age: number
}