import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrismaService } from 'src/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

@Module({
  controllers: [TaskController],
  providers: [TaskService, PrismaService, 
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard
    }
  ],
})
export class TaskModule {}
