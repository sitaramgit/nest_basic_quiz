import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Quiz } from "src/modules/quiz/quiz.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "quiz",
    entities: [Quiz],
    autoLoadEntities: true,
    synchronize: true
}