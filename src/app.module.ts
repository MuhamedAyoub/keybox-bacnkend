import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { CoursesModule } from './modules/courses/courses.module';
import { HomeworkModule } from './modules/homework/homework.module';
import { LessonsModule } from './modules/lessons/lessons.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmailModule } from './modules/email/email.module';
import { AdminModule } from './modules/admin/admin.module';
import { RatingModule } from './modules/rating/rating.module';
import { TeacherModule } from './modules/teacher/teacher.module';
import { StudentModule } from './modules/student/student.module';
import { PlanModule } from './modules/plan/plan.module';
import { QaModule } from './modules/materials/moules/qa/qa.module';
import { PathModule } from './modules/field/modules/path/path.module';
import { PathModule } from './modules/path/path.module';
import { FieldModule } from './modules/field/field.module';
@Module({
  imports: [
    PrismaModule,
    AuthModule,
    CoursesModule,
    HomeworkModule,
    LessonsModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secret',
      signOptions: { expiresIn: '1h' },
    }),
    EmailModule,
    AdminModule,
    RatingModule,
    TeacherModule,
    StudentModule,
    PlanModule,
    QaModule,
    PathModule,
    FieldModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}