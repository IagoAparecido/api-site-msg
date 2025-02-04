import { Module } from '@nestjs/common';
import { EmailController } from './controllers/email.controller';
import { EmailService } from './providers/email.service';

@Module({
  // imports: [],
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {}
