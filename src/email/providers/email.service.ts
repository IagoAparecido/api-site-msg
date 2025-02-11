import { BadRequestException, Injectable } from '@nestjs/common';
import { EmailVerificationDto } from '../dto/email-verification.dto';
import { ConfirmEmail } from '../../../emails/ConfirmEmail';
import { render } from '@react-email/components';
import { transporter } from 'src/config/mail';
import { ForgotPasswordDto } from '../dto/forgot-password.dto';
import ForgotPassword from 'emails/ForgotPassword';

@Injectable()
export class EmailService {
  async confirmEmail(data: EmailVerificationDto) {
    let html: string;
    html = await render(
      ConfirmEmail({ loginCode: data.code, name: data.name }),
    );

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: data.email.trim(),
      subject: 'Confirme seu E-mail',
      html: html,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        throw new BadRequestException(error);
      }
    });
  }
  async forgotPassword(data: ForgotPasswordDto) {
    let html: string;
    html = await render(ForgotPassword({ url: data.url, name: data.name }));

    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to: data.email.trim(),
      subject: 'Alterar senha',
      html: html,
    };

    transporter.sendMail(mailOptions, function (error) {
      if (error) {
        throw new BadRequestException(error);
      }
    });
  }
}
