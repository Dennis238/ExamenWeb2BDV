import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";
import {IngredienteEntity} from "../libro/libro.entity";

@Entity('autor')
export class AutorEntity {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({ length: 500 })
    nombrePlato: string;

    @Column({ length: 500 })
    descripcionPlato: string;

    @Column({ length: 500 })
    nacionalidad: string;

    @Column('float')
    numeroPersonas: number;

    @Column()
    picante: boolean;

    @Column({ length: 2000 })
    urlImg: string;

    //Relacion con usuario
    @ManyToOne(
        type => UsuarioEntity,
        usuario => usuario.autors)
    usuarioId: UsuarioEntity;

    //Relacion con libro
    @OneToMany(
        type => IngredienteEntity,
        libro => libro.autorId)
    ingredientes: AutorEntity [];
}