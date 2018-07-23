import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {AutorEntity} from "../Autor/autor.entity";

@Entity('libro')
export class IngredienteEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombreIngrediente: string;

    @Column('float')
    cantidad: number;

    @Column({ length: 500 })
    descripcionPreparacion: string;

    @Column()
    opcional: boolean;

    @Column({ length: 5})
    tipoIngrdiente: string;

    @Column()
    necesitaRefrigeracion: boolean;

    @Column({ length: 2000 })
    urlImg: string;

    //Relacion con autor
    @ManyToOne(
        type => AutorEntity,
        autor => autor.ingredientes)
    autorId: AutorEntity;
}