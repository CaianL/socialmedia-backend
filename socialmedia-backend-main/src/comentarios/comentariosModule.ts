import { Module } from '@nestjs/common';
import { ComentariosController } from './comentariosController';
import { ComentariosService } from './comentariosService';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comentario } from './commentariosEntity';

@Module({
  imports: [TypeOrmModule.forFeature([Comentario])],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}