import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {IngredienteEntity} from "./libro.entity";
import {Like, Repository} from "typeorm";
import {AutorEntity} from "../Autor/autor.entity";

@Injectable()
export class IngredienteService {

    /*arregloIngredientes: IngredienteClass[] = [
        new IngredienteClass(1, 'papas', 2, 'Papas fritas', false, 'Nose', false, 1)];*/
    listaIngredientes = [
        {'id': 1, 'nombreIngrediente': 'papas', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 1},
        {'id': 2, 'nombreIngrediente': 'sal', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 2},
        {'id': 3, 'nombreIngrediente': 'aceite', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 4},
        {'id': 4, 'nombreIngrediente': 'pimienta', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 5},
        {'id': 5, 'nombreIngrediente': 'harina', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 3},
        {'id': 6, 'nombreIngrediente': 'arroz', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 8},
        {'id': 7, 'nombreIngrediente': 'avena', 'cantidad': 3.2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 7},
        {'id': 8, 'nombreIngrediente': 'leche', 'cantidad': 2, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 7},
        {'id': 9, 'nombreIngrediente': 'lenteja', 'cantidad': 4.5, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 6},
        {'id': 10, 'nombreIngrediente': 'maíz', 'cantidad': 8, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 8},
        {'id': 11, 'nombreIngrediente': 'frejol', 'cantidad': 7, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 8},
        {'id': 12, 'nombreIngrediente': 'azucar', 'cantidad': 8, 'descripcionPreparacion': 'sfdsfdf', 'opcional': false, 'tipoIngrediente': 'nose', 'necesitaRefrigeracion': false, 'urlImg': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBVlYWFoyYUgo29IPKCyEQa4rqCUFqlUuoQ4Aautiu__yrX96', 'autorId': 3},
    ];

    constructor(@InjectRepository(IngredienteEntity)
                private readonly ingredienteRepository: Repository<IngredienteEntity>){
    }

    crearIngredientes() {
        for(var ingredientes in this.listaIngredientes) {
            const libro = new IngredienteEntity();
            libro.id = this.listaIngredientes[ingredientes].id;
            libro.nombreIngrediente = this.listaIngredientes[ingredientes].nombreIngrediente;
            libro.cantidad = this.listaIngredientes[ingredientes].cantidad;
            libro.descripcionPreparacion = this.listaIngredientes[ingredientes].descripcionPreparacion;
            libro.opcional =this.listaIngredientes[ingredientes].opcional;
            libro.tipoIngrdiente = this.listaIngredientes[ingredientes].tipoIngrediente;
            libro.necesitaRefrigeracion =  this.listaIngredientes[ingredientes].necesitaRefrigeracion;
            libro.urlImg = this.listaIngredientes[ingredientes].urlImg;
            const autor = new AutorEntity();
            autor.id = this.listaIngredientes[ingredientes].autorId;
            libro.autorId = autor;
            this.ingredienteRepository.save(libro);
        }
        return this.ingredienteRepository.find();
    }

    async traerTodos(): Promise<IngredienteEntity[]> {
        return await this.ingredienteRepository.find();
    }

    async buscar(parametroBusqueda) {

        return await this.ingredienteRepository.find({ nombreIngrediente: Like("%" + parametroBusqueda + "%") });
    }

    async traerIngredientePorAutor(autorID): Promise<IngredienteEntity[]> {
        return await this.ingredienteRepository.find({where: {autorId: autorID}});
    }

    async traerIngredientePorId(idIngrediente): Promise<IngredienteEntity[]> {
        return await this.ingredienteRepository.find({where: {id: idIngrediente}});
    }

    /*agregarIngrediente(libro: IngredienteClass): IngredienteClass[] {
        this.arregloIngredientes.push(libro);
        return this.arregloIngredientes;
    }

    mostrarTodos(): IngredienteClass[] {
        return this.arregloIngredientes;
    }

    mostrarUnoPorId(idABuscar: number): IngredienteClass {
        var ingredienteId: IngredienteClass = this.arregloIngredientes.find(libro => libro.id == idABuscar);
        return ingredienteId;
    }

    editarUnoPorId(idABuscar: number, libro: IngredienteClass ): IngredienteClass [] {
        var ingredienteId: IngredienteClass = this.arregloIngredientes.find(libro => libro.id == idABuscar);

        if (ingredienteId !== undefined) {
            var idArreglo = this.arregloIngredientes.indexOf(ingredienteId);
            puts(this.arregloIngredientes[idArreglo] = libro);
        }
        return this.arregloIngredientes;
    }*/
}