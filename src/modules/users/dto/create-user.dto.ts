import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  hashedPassword: string;  
}