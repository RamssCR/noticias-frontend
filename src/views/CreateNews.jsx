import PanelHeader from "@/components/panel-header/PanelHeader"
import NewsForm from "@/components/news-form/NewsForm"

function CreateNews() {
    return (
        <section className="w-full flex flex-col items-center gap-5">
            <PanelHeader headTo="/panel" />
            <NewsForm type="create" />
        </section>
    )
}

export default CreateNews