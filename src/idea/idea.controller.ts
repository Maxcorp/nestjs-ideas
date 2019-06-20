import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, Logger } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';
import { ValidationPipe } from '../shared/validation.pipe';

@Controller('api/ideas')
export class IdeaController {
    private logger = new Logger('IdeaController');

    constructor(private IdeaService: IdeaService) {}

    @Get()
    showAllIdeas() {
        return this.IdeaService.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createIdea(@Body() data: IdeaDTO) {
        this.logger.log(JSON.stringify(data));
        return this.IdeaService.create(data);
    }

    @Get(':id')
    getIdea(@Param('id') id: string) {
        return this.IdeaService.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDTO>) {
        this.logger.log(JSON.stringify(data));
        return this.IdeaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param('id') id: string) {
        return this.IdeaService.destroy(id);
    }
}
