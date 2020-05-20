import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getBooks, getBook, addBook, updateBook, deleteBook } from './controller.ts'

const router = new Router()
router.get('/movies', getBooks)
.get('/movies/:id', getBook)
.post('/movies', addBook)
.put('/movies/:id', updateBook)
.delete('/movies/:id', deleteBook)

export default router