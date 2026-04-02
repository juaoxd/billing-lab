import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from '../dto/login.dto';
import { LoginUseCase } from '../use-cases/login.use-case';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post('login')
  async handle(@Body() user: LoginDTO) {
    return this.loginUseCase.execute(user);
  }  
}
