import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/student.module';
import { StudentEntity } from './students/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      //this value should be in .env
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456?A',
      database: 'gscore_db',
      entities: [StudentEntity],
      synchronize: true,
    }),
    StudentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
