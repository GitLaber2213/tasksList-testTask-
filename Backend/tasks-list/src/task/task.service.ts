import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TaskService {
  constructor(private readonly prisma: PrismaService) { }
  async create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({ data: createTaskDto });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findFirst({ where: { id } });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.prisma.task.update({ where: { id }, data: updateTaskDto });
  }

  async remove(id: number) {
    return this.prisma.task.delete({ where: { id } })
  }
}
