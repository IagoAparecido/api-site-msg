import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { queueKeys } from 'src/constants';
import { EmailService } from '../providers/email.service';
import { EmailVerificationDto } from '../dto/email-verification.dto';

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @MessagePattern(queueKeys.SEND_CONFIRM_EMAIL)
  async sendCode(
    @Payload() data: EmailVerificationDto,
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    try {
      await this.emailService.confirmEmail(data);
      channel.ack(originalMsg);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      channel.nack(originalMsg);
    }
  }
}
