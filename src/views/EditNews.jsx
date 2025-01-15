import { useParams } from 'react-router-dom'
import { useFetch } from '@/hooks/useFetch'
import { showDate } from '@/utils/showDate'
import NewsForm from "@/components/news-form/NewsForm"
import PanelHeader from "@/components/panel-header/PanelHeader"

function EditNews() {
    const { id } = useParams()
    const [news] = useFetch(`/noticias/${id}`)
    
    const formattedDate = news[0]?.fecha_publicacion && showDate(news[0]?.fecha_publicacion)

    const fixedNews = {
        titulo: news[0]?.titulo,
        descripcion: news[0]?.descripcion,
        contenido: news[0]?.contenido,
        autor: news[0]?.autor,
        fecha_publicacion: formattedDate
    }

    return (
        <section className="w-full flex flex-col items-center gap-5">
            <PanelHeader headTo="/panel" />
            <NewsForm type="edit" id={id} news={fixedNews} />
        </section>
    )
}

export default EditNews