import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { IdeaService } from './idea.service';
import { IdeaDTO } from './idea.dto';

@Controller('idea')
export class IdeaController {
    constructor(private IdeaService: IdeaService) {}

    @Get()
    showAllIdeas() {
        return this.IdeaService.showAll();
    }

    @Post()
    createIdea(@Body() data: IdeaDTO) {
        return this.IdeaService.create(data);
    }

    @Get(':id')
    getIdea(@Param(':id') id: string) {
        return this.IdeaService.read(id);
    }

    @Put(':id')
    updateIdea(@Param(':id') id: string, @Body() data: Partial<IdeaDTO>) {
        return this.IdeaService.update(id, data);
    }

    @Delete(':id')
    destroyIdea(@Param(':id') id: string) {
        return this.IdeaService.destroy(id);
    }
}
