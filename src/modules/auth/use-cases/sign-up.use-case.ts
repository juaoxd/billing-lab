import { Injectable } from "@nestjs/common";
import { UsersService } from "src/modules/users/users.service";
import { SignUpDTO } from "../dto/sign-up.dto";
import { hash } from 'bcrypt'

@Injectable()
export class SignUpUseCase {
  constructor(private readonly usersService: UsersService) {} 
  
  async execute({ email, name, password }: SignUpDTO): Promise<void> {
    const hashedPassword = await hash(password, 8);

    await this.usersService.create({email, name, hashedPassword});  
  }
}