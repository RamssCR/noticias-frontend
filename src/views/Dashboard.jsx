import { useEffect, useState } from "react"
import { useFetch } from "@/hooks/useFetch"
import AppLink from "@/components/UI/AppLink"
import Title from "@/components/UI/Title"
import Icon from "@/components/UI/Icon"
import arrowIcon from '@/assets/arrow-right.svg'
import TextBox from "@/components/UI/TextBox"
import NewsCard from "@/components/news-card/NewsCard"

function Dashboard() {
    const [news] = useFetch('/noticias')
    const [dynamicNews, setDynamicNews] = useState([])

    useEffect(() => setDynamicNews(news), [news])
    const filterByName = (e) => {
        const searchValue = e.target.value.toLowerCase()
        if (!searchValue) {
            setDynamicNews(news)
            return
        }

        setDynamicNews(news?.filter(filteredNews => filteredNews.titulo.toLowerCase().includes(searchValue))) 
    }

    return (
        <section className="w-full flex flex-col items-start gap-5">
            <AppLink to="/panel" className="px-5 bg-main-complementary ml-auto">
                <span>Ir al panel</span>
                <Icon icon={arrowIcon} alt="Go" className="size-6" />
            </AppLink>
            <div className="w-full flex flex-col gap-5 mt-8 md:flex-row md:items-center md:justify-between">
                <Title className="text-[2.5em] md:text-[3.5em]">Noticias</Title>
                <TextBox 
                    placeholder="Busca por categoría"
                    className="bg-transparent px-4 w-60"
                    onInput={filterByName}
                />
            </div>
            <div className="w-full flex flex-col gap-4">
                {dynamicNews?.map(mappedNews => (
                    <NewsCard
                        key={mappedNews.id_noticias}
                        news={mappedNews}
                    />
                ))}
            </div>
        </section>
    )
}

export default Dashboard