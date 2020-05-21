import { Movie } from './model/Movie.ts'

let movies: Array<Movie> = [{
    id: "1",
    directed: "Anton Corbijn",
    produced: [
      {
        name: "Anton Corbijn"
      },
      {
        name: "Todd Eckert"
      },
      {
        name: "Orian Williams"
      },
      {
        name: "Iain Canning"
      },
      {
        name: "Peter Heslop"
      },
      {
        name: "Tony Wilson"
      },
      {
        name: "Deborah Curtis"
      },
      
    ],
    title: "Control",
  }]
  
  const getMovies = ({ response }: { response: any }) => { 
    response.body = movies 
  }
  
  const getMovie = ({ params, response }: { params: { id: string }; response: any }) => {
    const movie: Movie | undefined = searchMovieById(params.id)
    if (movie) {
      response.status = 200
      response.body = movies[0]
    } else {
      response.status = 404
      response.body = { message: `Movie not found.` }
    }   
  }
  
  const addMovie = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body()
    const movie: Movie = body.value  
    movies.push(movie)
    response.body = { message: 'OK' }
    response.status = 200
  }
  
  const updateMovie = async ({ params, request, response }: { params: { id: string }; request: any; response: any }) => {
    let movie: Movie | undefined = searchMovieById(params.id)
    if (movie) {
      const body = await request.body()
      const updateInfos: { author?: string; directed?: string;  title?: string;} = body.value
      movie = { ...movie, ...updateInfos}
      movies = [...movies.filter(movie => movie.id !== params.id), movie]
      response.status = 200
      response.body = { message: 'OK' }
    } else {
      response.status = 404
      response.body = { message: `Movie not found` }
    }  
  }
  
  const deleteMovie = ({ params, response }: { params: { id: string }; response: any }) => {
    movies = movies.filter(movie => movie.id !== params.id)
    response.body = { message: 'OK' }
    response.status = 200
  }
  

  const searchMovieById = (isbn: string): ( Movie | undefined ) => movies.filter(movie => movie.id === isbn )[0]
  
  export { getMovies, getMovie, addMovie, updateMovie, deleteMovie }