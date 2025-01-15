import { useContext, useState } from 'react'
import { reviewNews, deleteNews } from '@/api/newsRequests'
import { newsContext } from '@/context/newsContext'
import checkIcon from '@/assets/circle-check.svg'
import editIcon from '@/assets/pen.svg'
import deleteIcon from '@/assets/trash.svg'
import Title from '@/components/UI/Title'
import AppLink from '@/components/UI/AppLink'
import Icon from '@/components/UI/Icon'
import Button from '@/components/UI/Button'

// eslint-disable-next-line react/prop-types
function NewsItem({ id, title, status }) {
    const { removeLocalNews } = useContext(newsContext)
    const [dynamicStatus, setDynamicStatus] = useState(status)

    return (
        <div className="w-full flex flex-col gap-4 md:flex-row md:items-center md:justify-between py-3 px-1 border-b border-slate-300">
            <Title className="text-2xl text-slate-900 font-highlight font-semibold">{title}</Title>
            <div className="flex items-center gap-3">
                <Button 
                    className={`size-12 rounded-full md:size-14 ${dynamicStatus === 1 ? 'bg-green-400' : 'bg-gray-400'}`}
                    onClick={async () => {
                        await reviewNews(id, { estatus: dynamicStatus === 1 ? 0 : 1 })
                        setDynamicStatus(dynamicStatus === 1 ? 0 : 1)
                    }}
                >
                    <Icon icon={checkIcon} alt="Review" className="size-8 md:size-10" />
                </Button>
                <AppLink to={`/edit/${id}`} className="size-12 flex items-center justify-center bg-blue-500 rounded-full md:size-14">
                    <Icon icon={editIcon} alt="Edit" className="size-7 md:size-8" />
                </AppLink>
                <Button 
                    className="size-12 bg-red-500 rounded-full md:size-14"
                    onClick={async () => {
                        await deleteNews(id)
                        removeLocalNews(id)
                    }}
                >
                    <Icon icon={deleteIcon} alt="Delete" className="size-7 md:size-8" />
                </Button>
            </div>
        </div>
    )
}

export default NewsItem