import { Controller, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller('book')
export class BookController {
    private BookProxy: ClientProxy;

    constructor() {
        this.BookProxy = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'localhost',
                port: 3001
            }
        })
    }

    @Get('Hello')
    getHello() {
        return 'hello'
    }

    @Get('all')
    async getAllBook() {
        let pattern = `getallbooks`;
        return await this.BookProxy.send(pattern, {})


    }
}
