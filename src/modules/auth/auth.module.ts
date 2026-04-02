import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { LoginUseCase } from './use-cases/login.use-case';
import { SignUpUseCase } from './use-cases/sign-up.use-case';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '15m' }
      })
    })
  ],
  providers: [LoginUseCase, SignUpUseCase, JwtStrategy],
  controllers: [AuthController],
  exports: [LoginUseCase, SignUpUseCase]
})
export class AuthModule {}
