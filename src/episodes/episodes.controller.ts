import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort, 'hola');
    return 'The all episodes';
  }

  @Get('features')
  findFeature() {
    return 'features episodes';
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    return 'one episode';
  }

  @Post()
  create(@Body() input: unknown) {
    console.log(input);
    return 'create episode';
  }
}
