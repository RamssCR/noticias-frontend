// eslint-disable-next-line react/prop-types
function Icon({ icon, alt, className }) {
    return (
        <img src={icon} alt={alt} className={className ?? 'size-8'} />
    )
}

export default Icon