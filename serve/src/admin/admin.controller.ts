import { Controller, Get, HostParam } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('主人属')
@Controller({ host: ':account.example.com' })
export class AdminController {
  @Get()
  getInfo(@HostParam('account') account: string) {
    return account;
  }
}
