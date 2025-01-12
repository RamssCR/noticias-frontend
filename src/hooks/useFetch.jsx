import { useState, useEffect } from 'react'
import { apiConfig } from '@/api/newsRequests'

/**
 * Handles all GET requests to an API
 * @param {string} uri The API's endpoint to fetch the information
 * @returns {Promise<Array>} An array of the fetched information and its respective setter.
 */
export function useFetch(uri) {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await apiConfig.get(uri)
                setData(response?.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchNews()
    }, [uri])

    return [data, setData]
}