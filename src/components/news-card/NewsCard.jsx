import newsImage from "@/assets/mock-news-image.webp"
import Title from "@/components/UI/Title"
import ReadMoreLink from "./ReadMoreLink"

function NewsCard() {
    return (
        <article className="w-full shadow-md bg-slate-300 flex flex-col gap-3 py-4 px-5 rounded md:gap-8 md:py-6 md:px-7">
            <div className="flex flex-col items-start gap-4 md:grid md:grid-cols-3/4 md:gap-0">
                <img src={newsImage} alt="news image" className="w-full h-[12em] shadow-lg object-cover rounded md:h-[20em]" />
                <Title className="text-slate-900 text-2xl font-highlight font-semibold md:text-[2em] md:font-bold md:text-center md:order-first md:h-[10em] md:pr-5">Nueva batería ecológica que dura 5 veces más que las actuales</Title>
            </div>
            <div className="flex flex-col gap-8 items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="flex flex-col gap-1">
                    <p className="text-slate-800 font-semibold">
                        Batería ecológica, favorable para el medio ambiente y con
                        más durabilidad que las actuales que, con sus químicos,
                        destruyen el medio ambiente.
                    </p>
                    <ReadMoreLink to="6732843" />
                </div>
                <div className="flex flex-col items-start gap-1 md:ml-auto">
                    <p className="text-slate-900 font-semibold md:block md:w-full md:text-right">Fecha de Publicación: <span className="font-normal">10/01/2025</span></p>
                    <p className="text-slate-900 font-semibold md:block md:w-full md:text-right">Autor: <span className="font-normal">Santiago Acevedo</span></p>
                </div>
            </div>
        </article>
    )
}

export default NewsCard