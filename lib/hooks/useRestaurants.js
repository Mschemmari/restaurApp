import { useState, useRef } from 'react'
import { searchRestaurants } from '../services/restaurants'
// import restaurants from './lib/mocks/results.json'


export function useRestaurants({ search }) {
    const [restaurants, setRestaurants] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(null)
    const previousSearch = useRef(search)

    const getRestaurants = async () => {
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            setError(null)
            previousSearch.current = search
            const newRestaurants = await searchRestaurants({ search })
            setRestaurants(newRestaurants)
        } catch (e) {
            setError(e.message)
        } finally {
            setLoading(false)
        }
    }
    return { restaurants, getRestaurants, loading }
}