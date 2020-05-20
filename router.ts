import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getMovie, getMovies, addMovie, updateMovie, deleteMovie } from './controller.ts'

const router = new Router()
router.get('/movies', getMovies)
.get('/movies/:id', getMovie)
.post('/movies', addMovie)
.put('/movies/:id', updateMovie)
.delete('/movies/:id', deleteMovie)

export default router