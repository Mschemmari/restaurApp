import { useState, useEffect, useRef } from 'react'

export function useSearch() {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState(null)
    const isFirstInput = useRef(true)

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }
        if (search === '') {
            setError('No se puede buscar una pelicula vacia')
            return
        }
        if (search.length <= 3) {
            setError('tienen que tener mas de 3')
            return
        }

        setError(null)
    }, [search])
    return [search, updateSearch, error]
}