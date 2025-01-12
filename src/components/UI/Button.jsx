// eslint-disable-next-line react/prop-types
function Button({ children, className, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`py-3 font-semibold flex items-center justify-center hover:cursor-pointer hover:brightness-110 ${className ?? 'text-white rounded gap-3'}`}
        >{children}</button>
    )
}

export default Button