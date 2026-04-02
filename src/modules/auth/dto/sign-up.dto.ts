import { IsEmail, IsString, MinLength } from "class-validator";

export class SignUpDTO {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @MinLength(8)
  password: string;
}