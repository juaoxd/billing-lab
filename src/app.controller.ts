import { Controller, Request, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './modules/auth/jwt/jwt-auth-guard';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
