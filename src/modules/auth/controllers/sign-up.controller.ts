import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { SignUpUseCase } from '../use-cases/sign-up.use-case';
import { SignUpDTO } from '../dto/sign-up.dto';


@Controller('auth')
export class SignUpController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}

  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() user: SignUpDTO) {
    return this.signUpUseCase.execute(user);
  }
}