import { useFetch } from '@/hooks/useFetch'
import AppLink from '@/components/UI/AppLink'
import Icon from '@/components/UI/Icon'
import Title from '@/components/UI/Title'
import PanelHeader from '@/components/panel-header/PanelHeader'
import plusIcon from '@/assets/plus.svg'
import NewsItem from '@/components/news-item/NewsItem'
import { useContext, useEffect } from 'react'
import { newsContext } from '@/context/newsContext'

function Panel() {
    const { allNews, setAllNews } = useContext(newsContext)
    const [news] = useFetch('/dev/noticias/all')

    useEffect(() => {
        setAllNews(news)
    }, [news, setAllNews])

    return (
        <section className="w-full flex flex-col items-start gap-5">
            <PanelHeader />
            <div className="w-full flex items-center justify-between">
                <Title className="text-3xl text-slate-900 font-semibold">Noticias</Title>
                <AppLink to="/create" className="rounded-full size-16 bg-main grid place-items-center hover:brightness-110">
                    <Icon icon={plusIcon} alt="Create" className="size-6" />
                </AppLink>
            </div>
            <div className="w-full flex flex-col border-y border-slate-300 mt-5">
                {allNews.map(mappedNews => (
                    <NewsItem 
                        key={mappedNews.id_noticias}
                        id={mappedNews.id_noticias}
                        title={mappedNews.titulo}
                        status={mappedNews.estatus}
                    />
                ))}
            </div>
        </section>
    )
}

export default Panel