import { Module } from '@nestjs/common';
import { ThrottlerModule } from '@nestjs/throttler';
import { TaskModule } from './task/task.module';

@Module({
  imports: [ThrottlerModule.forRoot({
    throttlers: [
      {
        ttl: 10000,
        limit: 10,
      },
    ],
  }),
    TaskModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
