import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';
import { TypeORMError } from 'typeorm';

@Catch(TypeORMError)
export class TypeormExceptionFilter implements ExceptionFilter {
    catch(exception: TypeORMError, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const code = exception['code'];
        const message = exception['message'];
        const errors = {
            code,
            message,
        };
        let statusCode = 500;

        if (code === '23505') {
            errors['message'] = exception['detail'];
            statusCode = 409;
        }
        return response.status(statusCode).json({
            success: false,
            statusCode,
            errors,
        });
    }
}
