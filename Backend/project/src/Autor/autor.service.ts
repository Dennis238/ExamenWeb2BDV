import { Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {AutorEntity} from "./autor.entity";
import {Like, Repository} from "typeorm";
import {UsuarioEntity} from "../Usuario/usuario.entity";


@Injectable()
export class AutorService {

    /*arregloAutors: AutorClass[] = [new AutorClass(1,'Salchi', 'Papas y salchica', 'Ecuador', 2,true)];*/

    listaAutors = [
        {'id': 1, 'nombrePlato': 'Salchi', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 8},
        {'id': 2, 'nombrePlato': 'Tacos', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 6},
        {'id': 3, 'nombrePlato': 'Pastel Chocolate', 'descripcionPlato': 'Delicioso pastel con chocolate', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 1},
        {'id': 4, 'nombrePlato': 'Pizza', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 3},
        {'id': 5, 'nombrePlato': 'Alitas BBQ', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 5},
        {'id': 6, 'nombrePlato': 'Pollo Jardinero', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 2, 'picante': true, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 2},
        { 'id': 7, 'nombrePlato': 'Torta de Naranja', 'descripcionPlato': 'Papas y salchicha', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 5, 'picante': false, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 4},
        { 'id': 8, 'nombrePlato': 'Arroz relleno', 'descripcionPlato': 'Arroz con pollo, arvejas y pimiento', 'nacionalidad': 'Ecuatoriana', 'numeroPersonas': 5, 'picante': false, 'urlImg': 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', 'usuarioId': 7}
    ];

    constructor(@InjectRepository(AutorEntity)
                private readonly autorRepository: Repository<AutorEntity>){
    }

    crearAutors() {
        for(var autors in this.listaAutors) {
            const autor = new AutorEntity();
            autor.id = this.listaAutors[autors].id;
            autor.nombrePlato = this.listaAutors[autors].nombrePlato;
            autor.descripcionPlato = this.listaAutors[autors].descripcionPlato;
            autor.nacionalidad = this.listaAutors[autors].nacionalidad;
            autor.numeroPersonas =this.listaAutors[autors].numeroPersonas;
            autor.picante = this.listaAutors[autors].picante;
            autor.urlImg =  this.listaAutors[autors].urlImg;
            const usuario = new UsuarioEntity();
            usuario.id = this.listaAutors[autors].usuarioId;
            autor.usuarioId = usuario;
            this.autorRepository.save(autor);
        }
        return this.autorRepository.find();
    }

    async traerTodos(): Promise<AutorEntity[]> {
        return await this.autorRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.autorRepository.find({ nombrePlato: Like("%" + parametroBusqueda + "%") });
    }

    async traerAutorPorUsuario(usuarioID): Promise<AutorEntity[]> {
        return await this.autorRepository.find({where: {usuarioId: usuarioID}});
    }

    /*agregarAutor(autor: AutorClass): AutorClass[] {
        this.arregloAutors.push(autor);
        return this.arregloAutors;
    }

    mostrarTodos(): AutorClass[] {
        return this.arregloAutors;
    }

    mostrarUnoPorId(idABuscar: number): AutorClass {
        var autorId: AutorClass = this.arregloAutors.find(autor => autor.id == idABuscar);
        return autorId;
    }

    editarUnoPorId(idABuscar: number, autor: AutorClass ): AutorClass [] {
        var autorId: AutorClass = this.arregloAutors.find(autor => autor.id == idABuscar);
        if (autorId !== undefined) {
            var idArreglo = this.arregloAutors.indexOf(autorId);
            puts(this.arregloAutors[idArreglo] = autor);
        }
        return this.arregloAutors;
    }*/
}
