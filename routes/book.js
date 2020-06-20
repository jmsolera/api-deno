import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getBook } from '../controllers/book.js'

const router = new Router()

router.get('/api/v1/books', getBooks)
    .get('/api/v1/books/:id', getBook)

export default router;