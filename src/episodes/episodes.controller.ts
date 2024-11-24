import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from 'src/dto/create-episode.dto';

@Controller('episodes')
export class EpisodesController {
  constructor(private episodesServices: EpisodesService) {}
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort, 'hola');
    return this.episodesServices.findAll(sort);
  }

  @Get('features')
  findFeature() {
    return this.episodesServices.findFeatured();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    return this.episodesServices.findOne(id);
  }

  @Post()
  create(@Body() input: CreateEpisodeDto) {
    console.log(input);
    return this.episodesServices.create(input);
  }
}
