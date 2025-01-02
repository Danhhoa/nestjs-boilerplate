import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TypeormExceptionFilter } from './filters/typeorm-exception.filter';
import { Provider } from '@nestjs/common';

export const providers: Array<Provider> = [
    // Custom filters exceptionss
    {
        provide: APP_FILTER,
        useClass: HttpExceptionFilter,
    },
    {
        provide: APP_FILTER,
        useClass: TypeormExceptionFilter,
    },
];
