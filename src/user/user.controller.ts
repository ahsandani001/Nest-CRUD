import { Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Request } from 'express';
import { GetUser } from 'src/auth/decorator';
import { JWTGuard } from 'src/auth/guard';

@Controller('users')
export class UserController {
  @UseGuards(JWTGuard)
  @Get('me')
  getMe(@GetUser() user: User) {
    return user;
  }
}
