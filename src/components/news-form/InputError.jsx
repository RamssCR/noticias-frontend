// eslint-disable-next-line react/prop-types
function InputError({ error, className }) {
    return (
        <span className={`text-red-600 text-[0.9em] font-semibold ${className}`}>{error}</span>
    )
}

export default InputError