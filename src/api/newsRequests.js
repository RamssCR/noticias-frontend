import axios from 'axios'
import { VITE_API_URL } from '@/utils/env.config'

export const apiConfig = axios.create({
    baseURL: VITE_API_URL,
    timeout: 6000
})

/**
 * Creates a news with the given object of values
 * @param {object} data 
 * @returns {Promise<object>} the created news 
 */
export const createNews = async data => await apiConfig.post('/noticias', data)

/**
 * Edits an already existing news with the given object of values
 * @param {number} id 
 * @param {object} data 
 * @returns {Promise<object>} the modified news
 */
export const editNews = async (id, data) => await apiConfig.patch(`/noticias/${id}`, data)

/**
 * Submits for review to approve or reject a news
 * @param {number} id 
 * @param {object} data 
 * @returns {Promise<object>} a message with the review's conclusion
 */
export const reviewNews = async (id, data) => await apiConfig.patch(`/noticias/${id}/review`, data)

/**
 * Deletes an already existing news
 * @param {number} id 
 * @returns {Promise<object>} a message if deletion was successful
 */
export const deleteNews = async id => await apiConfig.delete(`/noticias/${id}`)