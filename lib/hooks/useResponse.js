import { useState, useRef } from 'react'
// import { searchMovies } from '../services/movies.js'
import restaurants from './lib/mocks/results.json'


export function useMovies({ search }) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(null)
    const previousSearch = useRef(search)

    const getMovies = async () => {
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    return { movies, getMovies, loading }
}