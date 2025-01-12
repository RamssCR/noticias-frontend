import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function ReadMoreLink({ to, className }) {
    return (
        <Link to={`/${to}`} className={`hover:underline w-fit ${className ?? 'text-main uppercase'}`} >Leer Más...</Link>
    )
}

export default ReadMoreLink