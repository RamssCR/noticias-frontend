import AppLink from "@/components/UI/AppLink"
import Title from "@/components/UI/Title"
import Icon from "@/components/UI/Icon"
import arrowIcon from '@/assets/arrow-right.svg'
import TextBox from "@/components/UI/TextBox"

function Dashboard() {
    return (
        <section className="w-full flex flex-col items-start gap-5">
            <AppLink to="/panel" className="px-5 bg-main-complementary ml-auto">
                <span>Ir al panel</span>
                <Icon icon={arrowIcon} alt="Go" className="size-6" />
            </AppLink>
            <div className="w-full flex flex-col gap-5 mt-8">
                <Title>Noticias</Title>
                <TextBox 
                    placeholder="Busca por categoría"
                />
            </div>
        </section>
    )
}

export default Dashboard