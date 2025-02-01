import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './modules/app/app.module';
import { queueName } from './constants';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_URL || 'amqp://localhost:5672'],
        queue: queueName,
        queueOptions: {
          durable: true,
        },
        noAck: false,
        persistent: true,
        prefetchCount: 8,
      },
    },
  );

  await app.listen();
}
bootstrap();
