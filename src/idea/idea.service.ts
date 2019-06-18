import { Injectable } from '@nestjs/common';
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
        return await this.IdeaRepository.findOne({ where: {id} });
    }

    async update(id: string, data: Partial<IdeaDTO>) {
         await this.IdeaRepository.update( {id}, data );
         return await this.IdeaRepository.findOne({ id });
    }

    async destroy(id: string) {
        await this.IdeaRepository.delete({ id });

        return {deleted: true}
    }
}