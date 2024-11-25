import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from '../dto/create-episode.dto';
import { ConfigService } from '../config/config.service';

@Controller('episodes')
export class EpisodesController {
  constructor(
    private episodesServices: EpisodesService,
    private configServices: ConfigService,
  ) {}
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);
    console.log(this.configServices.settings());
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
