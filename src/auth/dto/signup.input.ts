import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, Matches, MinLength } from 'class-validator';

@InputType()
export class SignUpInput {
  @Field()
  @IsEmail({}, { message: 'Must be a valid email' })
  email: string;

  @Field()
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @Matches(/^(?=.*[a-z])/, {
    message: 'Password must contain lowercase letter',
  })
  @Matches(/^(?=.*[A-Z])/, {
    message: 'Password must contain uppercase letter',
  })
  @Matches(/^(?=.*\d)/, {
    message: 'Password must contain number',
  })
  @Matches(/^(?=.*[!@#$%^&*])/, {
    message: 'Password must contain special character (!@#$%^&*)',
  })
  password: string;

  @Field()
  firstName: string;

  @Field({ nullable: true })
  lastName?: string;
}
