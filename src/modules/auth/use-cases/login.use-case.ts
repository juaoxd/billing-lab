import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/modules/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDTO } from '../dto/login.dto';
import { compare } from 'bcrypt';

@Injectable()
export class LoginUseCase {
  constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService) {}

  async execute({ email, password }: LoginDTO) { 
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid credentials.');
    }
    
    const payload = { email: user.email, sub: user.id }

    return {
      accessToken: this.jwtService.sign(payload)
    }
  }
}
