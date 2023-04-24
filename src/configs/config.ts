import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mariadb',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "quiz",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
}