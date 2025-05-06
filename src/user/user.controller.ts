/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('user')
export class UserController {
  @Post('add-user')

  // using Custom Validation Pipe UpperCasePipe to convert username in uppercase
  addUserName(@Body('userName', new UppercasePipe()) userName: string) {
    return { message: `Received username:${userName}` };
  }
}
