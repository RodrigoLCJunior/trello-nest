import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UsersController]
})
export class UsersModule { }
