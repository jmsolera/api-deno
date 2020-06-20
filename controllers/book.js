const books = [
    {
        id: '1',
        name: 'Beginning Node.js, Express & MongoDB Development',
        author: 'Greg Lim',
        price: '8,10',
        currency: 'EUR'
    },
    {
        id: '2',
        name: 'Get Programming with Node.js',
        author: 'Jonathan Wexler',
        price: '24,08',
        currency: 'EUR'
    },
    {
        id: '3',
        name: 'Node JS: Instalación - Arquitectura - node y npm',
        author: 'Luciano Puciarelli',
        price: '4,31',
        currency: 'EUR'
    }
];


const getBooks = ({ response }) => {
    return response.body = {
        success: true,
        data: books
    }
}


const getBook = ({ params, response }) => {
    const book = books.find(p => p.id === params.id)

    if (book) {
        response.status = 200
        response.body = {
            success: true,
            data: book
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: 'No book found'
        }
    }
}

export { getBooks, getBook }