/* eslint-disable react/prop-types */
import Title from '@/components/UI/Title'
import { VITE_API_URL } from '@/utils/env.config'

function SingleNewsCard({ news }) {
    const {
        titulo,
        contenido,
        multimedia,
        fecha_publicacion,
        autor
    } = news

    return (
        <article className="bg-slate-300 shadow-md p-6 w-full flex flex-col items-center gap-6 rounded">
            <Title className="text-[1.7em] text-slate-900 font-highlight text-center mb-3 font-bold">{titulo}</Title>
            <img src={`${VITE_API_URL.slice(0, -4)}/storage/${multimedia}`} alt="News" className='shadow-lg rounded w-full md:h-[23em] md:object-cover' />
            <p className="text-slate-800 font-semibold md:px-6">{contenido}</p>
            <div className="w-full flex flex-col gap-1 items-end mt-8">
                <p className="text-slate-900 font-semibold">Fecha de Publicación: <span className="font-normal">{fecha_publicacion}</span></p>
                <p className="text-slate-900 font-semibold">Autor: <span className="font-normal">{autor}</span></p>
            </div>
        </article>
    )
}

export default SingleNewsCard