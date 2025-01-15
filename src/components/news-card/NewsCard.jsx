/* eslint-disable react/prop-types */
import { VITE_API_URL } from '@/utils/env.config'
import Title from "@/components/UI/Title"
import ReadMoreLink from "./ReadMoreLink"

function NewsCard({ news }) {
    const {
        id_noticias,
        titulo,
        descripcion,
        fecha_publicacion,
        autor,
        multimedia
    } = news

    return (
        <article className="w-full shadow-md bg-slate-300 flex flex-col gap-3 py-4 px-5 rounded md:gap-8 md:py-6 md:px-7">
            <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-3/4 md:gap-0">
                <img src={`${VITE_API_URL.slice(0, -4)}/storage/${multimedia}`} alt="news image" className="w-full h-[12em] shadow-lg object-cover rounded md:h-[20em]" />
                <Title className="text-slate-900 text-2xl font-highlight font-semibold md:text-[2em] md:font-bold md:text-center md:order-first md:h-[10em] md:pr-5">{titulo}</Title>
            </div>
            <div className="flex flex-col gap-8 items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="flex flex-col gap-1">
                    <p className="text-slate-800 font-semibold">{descripcion}</p>
                    <ReadMoreLink to={id_noticias} />
                </div>
                <div className="flex flex-col items-start gap-1 md:ml-auto">
                    <p className="text-slate-900 font-semibold md:block md:w-full md:text-right">Fecha de Publicación: <span className="font-normal">{fecha_publicacion}</span></p>
                    <p className="text-slate-900 font-semibold md:block md:w-full md:text-right">Autor: <span className="font-normal">{autor}</span></p>
                </div>
            </div>
        </article>
    )
}

export default NewsCard