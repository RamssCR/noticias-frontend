import AppLink from "@/components/UI/AppLink"

function Dashboard() {
    return (
        <section className="w-full flex flex-col items-start gap-5">
            <AppLink to="/panel" className="px-5 bg-main-complementary ml-auto">Ir al panel</AppLink>
        </section>
    )
}

export default Dashboard