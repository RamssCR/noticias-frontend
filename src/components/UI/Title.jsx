// eslint-disable-next-line react/prop-types
function Title({ children, className }) {
    return (
        <h1 className={`text-main flex items-center gap-3 ${className ?? 'uppercase text-[2.5em] font-semibold'}`}>{children}</h1>
    )
}

export default Title