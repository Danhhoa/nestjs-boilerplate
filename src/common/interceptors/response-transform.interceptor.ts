import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomResponse } from '../interfaces';
import { DEFAULT_LIMIT } from '../contants';

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, CustomResponse<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<CustomResponse<T>> {
        const http = context.switchToHttp();
        const resquest = http.getRequest<Request>();
        const response = http.getResponse<Response>();
        const statusCode = response.statusCode;

        return next.handle().pipe(
            map((data) => {
                if (data && isPagination(data)) {
                    return {
                        success: true,
                        code: statusCode,
                        data,
                        pagination: getPagination(resquest, data),
                    };
                }

                return { success: true, code: statusCode, data };
            }),
        );
    }
}

const isPagination = (data: Object | Array<Object>): boolean => {
    if (data.hasOwnProperty('rows')) {
        return true;
    }

    return false;
};

const getPagination = (req: Request, data: { count: number; rows: any[] }) => {
    const { page: pageQuery, limit: limitQuery } = req.query;
    const page = pageQuery ? +pageQuery : 1;
    const limit = limitQuery ? +limitQuery : DEFAULT_LIMIT;

    const totalItems = data.count;
    const totalPages = Math.ceil(data.count / +limit) || 1;

    return {
        page,
        limit,
        totalItems,
        totalPages,
    };
};
