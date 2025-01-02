export interface CustomResponse<T> {
    success: boolean;
    code: number;
    data: T;
    pagination?: IResponsePagination;
}

export interface IResponsePagination {
    page: number;
    limit: number;
    totalItems: number;
    totalPages: number;
}
