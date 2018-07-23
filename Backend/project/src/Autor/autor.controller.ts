import {Body, Controller, Get, Param, Post, Put, Req, Res} from "@nestjs/common";
import {AutorService} from "./autor.service";
import {AutorEntity} from "./autor.entity";

@Controller('Autor')
export class AutorController {

    constructor(private _autorService: AutorService) {}

    @Get()
    async listarTodos(
        @Res() response,
        @Req() request,
    ) {
        const autors = await this._autorService.traerTodos();
        return response.send(autors);
    }

    @Get('/:paramBusqueda')
    async buscar(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._autorService.buscar(paramParams.paramBusqueda);
        return response.send(usuarios);
    }

    @Get('/porUsuario/:idUsuario')
    async obtenerAutorPorUsuario(
        @Param() paramParams,
        @Res() response
    ) {
        const usuarios = await this._autorService.traerAutorPorUsuario(paramParams.idUsuario);
        return response.send(usuarios);
    }

    @Post()
    async crearAutorBase() {
        const autors = this._autorService.crearAutors();
        return autors;
    }

    /*@Get('/:id')
    obtenerUno(
        @Param() paramParams,
        @Res() response
    ) {
        const autorPorId = this._autorService.mostrarUnoPorId(paramParams.id);

        if (autorPorId === undefined) {
            throw new NoEncontradoException(
                'No se encontro ningun elemento con ese id',
                'error',
                4
            )
        } else {
            return response.send(autorPorId);
        }
    }

    @Put('/:id')
    editarUno(
        @Param() paramParams,
        @Body(new GeneralPipe(COMIDA_SCHEMA)) autorArgumento,
        @Res() response
    ) {
        if (this._autorService.mostrarUnoPorId(paramParams.id) !== undefined) {
            return response.send(this._autorService.editarUnoPorId(paramParams.id, autorArgumento));
        } else {
            throw new NoEncontradoException(
                'No se encontro ningun elemento para editar con ese id',
                'error',
                4
            )
        }
    }*/
}