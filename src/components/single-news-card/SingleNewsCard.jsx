import newsImage from '@/assets/mock-news-image.webp'
import Title from '@/components/UI/Title'

function SingleNewsCard() {
    return (
        <article className="bg-slate-300 shadow-md p-6 w-full flex flex-col items-center gap-6 rounded">
            <Title className="text-[1.7em] text-slate-900 font-highlight text-center mb-3 font-bold">Nueva batería ecológica que dura 5 veces más que las actuales</Title>
            <img src={newsImage} alt="News" className='shadow-lg rounded w-full md:h-[23em] md:object-cover' />
            <p className="text-slate-800 font-semibold md:px-6">
                Científicos japoneses han presentado una batería revolucionaria fabricada con
                materiales reciclables y sostenibles. Este nuevo diseño ofrece una duración
                hasta 5 veces mayor que las baterías tradicionales, marcando un avance
                significativo en el desarrollo de soluciones energéticas más eficientes y
                ecológicas. Además, su tecnología permite reducir el impacto ambiental en
                todo su ciclo de vida, desde la producción hasta el reciclaje. Esta
                innovación está destinada a transformar sectores claves como el de los
                dispositivos móviles, los vehículos energéticos y el almacenamiento de
                energía renovable.
            </p>
            <div className="w-full flex flex-col gap-1 items-end mt-8">
                <p className="text-slate-900 font-semibold">Fecha de Publicación: <span className="font-normal">10/01/2025</span></p>
                <p className="text-slate-900 font-semibold">Autor: <span className="font-normal">Santiago Acevedo</span></p>
            </div>
        </article>
    )
}

export default SingleNewsCard