import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ComentariosService } from './commentarios.service';
import { ComentarioDTO } from './commentarios.dto';

@Controller('comentarios')
export class ComentariosController {
  constructor(private readonly comentariosService: ComentariosService) {}

  @Get()
  async getComentarios(): Promise<Comentario[]> {
    return this.comentariosService.getComentarios();
  }

  @Get(':id')
  async getComentarioById(@Param('id') id: number): Promise<Comentario> {
    return this.comentariosService.getComentarioById(id);
  }

  @Post()
  async createComentario(@Body() comentarioDTO: ComentarioDTO): Promise<Comentario> {
    return this.comentariosService.createComentario(comentarioDTO);
  }

  @Put(':id')
  async updateComentario(@Param('id') id: number, @Body() comentarioDTO: ComentarioDTO): Promise<Comentario> {
    return this.comentariosService.updateComentario(id, comentarioDTO);
  }

  @Delete(':id')
  async deleteComentario(@Param('id') id: number): Promise<void> {
    return this.comentariosService.deleteComentario(id);
  }
}