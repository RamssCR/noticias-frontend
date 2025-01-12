import checkIcon from '@/assets/circle-check.svg'
import editIcon from '@/assets/pen.svg'
import deleteIcon from '@/assets/trash.svg'
import Title from '@/components/UI/Title'
import AppLink from '@/components/UI/AppLink'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'

// eslint-disable-next-line react/prop-types
function NewsItem({ id, title }) {
    return (
        <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-3 px-1 border-b border-slate-300">
            <Title className="text-2xl text-slate-900 font-highlight font-semibold">{title}</Title>
            <div className="flex items-center gap-3">
                <Button className="size-12 bg-gray-400 rounded-full md:size-14">
                    <Icon icon={checkIcon} alt="Review" className="size-8 md:size-10" />
                </Button>
                <AppLink to={`/edit/${id}`} className="size-12 flex items-center justify-center bg-blue-500 rounded-full md:size-14">
                    <Icon icon={editIcon} alt="Edit" className="size-7 md:size-8" />
                </AppLink>
                <Button className="size-12 bg-red-500 rounded-full md:size-14">
                    <Icon icon={deleteIcon} alt="Delete" className="size-7 md:size-8" />
                </Button>
            </div>
        </div>
    )
}

export default NewsItem