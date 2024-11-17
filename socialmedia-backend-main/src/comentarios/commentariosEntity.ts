import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Postagem } from "../postagens/postagens.entity";

@Entity()
export class Comentario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @ManyToOne(() => Postagem, postagem => postagem.comentarios)
  postagem: Postagem;
}