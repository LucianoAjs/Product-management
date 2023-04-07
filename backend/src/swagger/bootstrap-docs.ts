import { setSwaggerConfig } from '@/swagger/config.swagger';
import { DOC } from '@/swagger/constant';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as basicAuth from 'express-basic-auth';

export const bootstrapDocs = (app: INestApplication) => {
  const configService = app.get(ConfigService);

  const swaggerUser = configService.get('SWAGGER_USER');
  const swaggerPassword = configService.get('SWAGGER_PASSWORD');

  app.use(
    [DOC.UNKNOW.SWAGGER_ROUTE],
    basicAuth({
      challenge: true,
      users: { [swaggerUser]: swaggerPassword },
    }),
  );

  setSwaggerConfig(
    app,
    DOC.UNKNOW.TITLE,
    DOC.UNKNOW.DESC,
    DOC.UNKNOW.VERSION,
    DOC.UNKNOW.SWAGGER_ROUTE,
  );
};
