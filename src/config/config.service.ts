import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  async settings(): Promise<string> {
    return 'Settings';
  }
}
