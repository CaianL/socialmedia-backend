import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comentario } from './commentariosEntity';
import { ComentarioDTO } from './DTO/comentarios.dto';

@Injectable()
export class ComentariosService {
  constructor(
    @InjectRepository(Comentario)
    private readonly comentarioRepository: Repository<Comentario>,
  ) {}

  async createComentario(comentarioDTO: ComentarioDTO): Promise<Comentario> {
    const comentario = this.comentarioRepository.create(comentarioDTO);
    return this.comentarioRepository.save(comentario);
  }

  async getComentarios(): Promise<Comentario[]> {
    return this.comentarioRepository.find();
  }

  async getComentarioById(id: number): Promise<Comentario> {
    return this.comentarioRepository.findOne(id);
  }

  async updateComentario(id: number, comentarioDTO: ComentarioDTO): Promise<Comentario> {
    const comentario = await this.comentarioRepository.findOne(id);
    if (!comentario) {
      throw new Error('Comentario not found');
    }
    this.comentarioRepository.merge(comentario, comentarioDTO);
    return this.comentarioRepository.save(comentario);
  }

  async deleteComentario(id: number): Promise<void> {
    await this.comentarioRepository.delete(id);
  }
}