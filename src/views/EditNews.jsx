import NewsForm from "@/components/news-form/NewsForm"
import PanelHeader from "@/components/panel-header/PanelHeader"

function EditNews() {
    return (
        <section className="w-full flex flex-col items-center gap-5">
            <PanelHeader headTo="/panel" />
            <NewsForm type="edit" />
        </section>
    )
}

export default EditNews