import { Module } from '@nestjs/common';
import { FieldService } from './field.service';
import { FieldController } from './field.controller';
import { AuthModule } from '../auth/auth.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [FieldController],
  providers: [FieldService],
  imports: [PrismaModule, AuthModule],
})
export class FieldModule {}
