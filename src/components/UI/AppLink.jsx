import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function AppLink({ to, children, className }) {
    return (
        <Link 
            to={to} 
            className={`flex items-center gap-2 font-semibold py-4 text-white rounded hover:brightness-105 ${className ?? 'px-5 bg-main-complementary'}`}
        >{children}</Link>
    )
}

export default AppLink