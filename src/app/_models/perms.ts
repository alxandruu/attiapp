export class Perms {
    public id: number;
    public name: string;
    public consultar: boolean;
    public modificar: boolean;
    public eliminar: boolean;
    public administrar: boolean;

    constructor(id: number, name: string, consultar: boolean, modificar: boolean, eliminar: boolean, administrar: boolean) {
        this.id = id;
        this.name = name;
        this.consultar = consultar;
        this.modificar = modificar;
        this.eliminar = eliminar;
        this.administrar = administrar;
    }
}