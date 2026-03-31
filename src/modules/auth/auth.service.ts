import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async login(userData: LoginDTO) {
    const user = await this.usersService.findByEmail(userData.email);

    if (!user || user.password !== userData.password) {
      return new UnauthorizedException();
    }
    
    const payload = { email: user.email, sub: user.id }

    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
