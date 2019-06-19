import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import {IdeaEntity} from './idea.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IdeaDTO } from './idea.dto';

@Injectable()
export class IdeaService {
    constructor(@InjectRepository(IdeaEntity) private IdeaRepository: Repository<IdeaEntity>) {}

    async showAll() {
        return await this.IdeaRepository.find();
    }

    async create(data: IdeaDTO) {
        const idea = await this.IdeaRepository.create(data);
        await this.IdeaRepository.save(idea);

        return idea;
    }

    async read(id: string) {
        const idea = await this.IdeaRepository.findOne({ where: {id} }); 

        if(!idea) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }

        return idea;
    }

    async update(id: string, data: Partial<IdeaDTO>) {
        let idea = await this.IdeaRepository.findOne({ where: {id} }); 

         if(!idea) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
         }

         await this.IdeaRepository.update( {id}, data );
         idea = await this.IdeaRepository.findOne({ where: {id} });
         return await idea;
    }

    async destroy(id: string) {
        const idea = await this.IdeaRepository.findOne({ where: {id} }); 

         if(!idea) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
         }

        await this.IdeaRepository.delete({ id });

        return idea;
    }
}