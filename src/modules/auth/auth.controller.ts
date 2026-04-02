import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SignUpUseCase } from './use-cases/sign-up.use-case';
import { SignUpDTO } from './dto/sign-up.dto';
import { LoginDTO } from './dto/login.dto';
import { LoginUseCase } from './use-cases/login.use-case';


@Controller('auth')
export class AuthController {
  constructor(private readonly signUpUseCase: SignUpUseCase, private readonly loginUseCase: LoginUseCase) {}

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() user: SignUpDTO) {
    return this.signUpUseCase.execute(user);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async handle(@Body() user: LoginDTO) {
    return this.loginUseCase.execute(user);
  }  
}