import AppLink from '@/components/UI/AppLink'
import Icon from '@/components/UI/Icon'
import Title from '@/components/UI/Title'
import arrowLeftIcon from '@/assets/arrow-left.svg'

// eslint-disable-next-line react/prop-types
function PanelHeader({ headTo = '/' }) {
    return (
        <>
            {/* Leaving className empty resets all tailwind classes from AppLink */}
            <AppLink to={headTo} className="w-fit mr-auto">
                <Icon icon={arrowLeftIcon} alt="Back" />
            </AppLink>
            <Title className="text-[2.25em] pb-2 w-full border-b border-slate-400">Panel de Noticias</Title>
        </>
    )
}

export default PanelHeader