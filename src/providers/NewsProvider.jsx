import { useState } from 'react'
import { newsContext } from '@/context/newsContext'

// eslint-disable-next-line react/prop-types
export function NewsProvider({ children }) {
    const [globalNews, setGlobalNews] = useState([])
    const [allNews, setAllNews] = useState([])

    function removeLocalNews(id) {
        setAllNews(allNews.filter(news => news.id_noticias !== id))
    }

    return (
        <newsContext.Provider value={{
            globalNews,
            setGlobalNews,
            removeLocalNews,
            allNews,
            setAllNews
        }}>
            {children}
        </newsContext.Provider>
    )
}