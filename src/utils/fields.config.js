export const fields = [
    [
        {
            label: 'Agrega un título',
            field: {
                id: 'titulo',
                type: 'text',
                placeholder: 'ejem. Batería renovable'
            },
            error: 'El campo título no puede estar vacío'
        },
        {
            label: 'Agrega una pequeña descripción',
            field: {
                id: 'descripcion',
                type: 'text',
                placeholder: 'ejem. Batería renovable por 5 años amigable con el ambiente'
            },
            error: 'El campo descripción no puede estar vacío'
        },
        {
            label: 'Agrega el contenido de la noticia',
            field: {
                id: 'contenido',
                type: 'textarea',
                placeholder: 'ejem. Las baterías renovables ayudan al medio ambiente...'
            },
            error: 'El campo contenido no puede estar vacío'
        }
    ],
    [
        {
            label: 'Autor',
            field: {
                id: 'autor',
                type: 'text',
                placeholder: 'ejem. Miguel de Cervantes'
            },
            error: 'El campo autor no puede estar vacío'
        },
        {
            label: 'Fecha',
            field: {
                id: 'fecha_publicacion',
                type: 'date',
                placeholder: ''
            },
            error: 'Marque el campo fecha'
        }
    ],
    [
        {
            label: 'Sube una imagen',
            field: {
                id: 'multimedia',
                type: 'file',
                placeholder: ''
            },
            error: 'Sube una imagen relacionada con la noticia'
        }
    ]
]