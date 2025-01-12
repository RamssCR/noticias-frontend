import arrowLeftIcon from '@/assets/arrow-left.svg'
import arrowRightIcon from '@/assets/arrow-right.svg'
import SingleNewsCard from '@/components/single-news-card/SingleNewsCard'
import AppLink from '@/components/UI/AppLink'
import Icon from '@/components/UI/Icon'

function News() {
    return (
        <section className="w-full flex flex-col gap-8">
            <header className="w-full flex items-center justify-between">
                {/* Leaving className empty resets all tailwind classes from AppLink */}
                <AppLink to="/" className="">
                    <Icon icon={arrowLeftIcon} alt="Back" />
                </AppLink>
                <AppLink to="/panel" className="px-5 bg-main-complementary">
                    <span>Ir al panel</span>
                    <Icon icon={arrowRightIcon} alt="Go" className="size-6" />
                </AppLink>
            </header>
            <SingleNewsCard />
        </section>
    )
}

export default News