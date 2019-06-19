import { Catch, ExceptionFilter, HttpException, ArgumentsHost, Logger, HttpStatus } from '@nestjs/common';

@Catch()
export class HttpErrorFilter implements ExceptionFilter{
    catch(exeception: HttpException, host: ArgumentsHost){
        const ctx = host.switchToHttp();
        const request = ctx.getRequest();
        const response = ctx.getResponse();
        const status = exeception.getStatus ? exeception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;;
      

        const errorResponse = {
            code: status,
            timestamp: new Date().toLocaleDateString(),
            path: request.url,
            method: request.method,
            message: exeception.message.error || exeception.message || null,
        };

        Logger.error(
            `${request.method} ${request.url}`, 
            JSON.stringify(errorResponse), 
            'ExceptionFilter'
        );

        response.status(status).json(errorResponse);
    }
}