const EntradasSchemas = {
    name:'Entradas',
    primaryKey: 'id',
    properties:{
        id: 'string',
        amount:'double',
        description:'string?',
        entradaAt: 'date',
        latitude:'float?',
        longitude:'float?',
        address:'string?',
        photo:'string?',
        isInit: 'bool',
        categoria: 'Categorias'
    }
};

export default EntradasSchemas;