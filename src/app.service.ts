import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const envVar = process.env.TEST || 'no-var';
    return `Hello World! ${envVar}`;
  }
}
