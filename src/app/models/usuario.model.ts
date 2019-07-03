
export class Usuario {

    constructor(
        public clave: string,
        public cedula: string,
        public nombre?: string,
        public correo?: string,
        public creditos?: any,
        public estadoDeCredito?: string,
        public _id?: string,
    ) { }

}


