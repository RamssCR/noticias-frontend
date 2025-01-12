import InputError from './InputError'

/* eslint-disable react/prop-types */
function FormField({ label, field, register, error }) {
    const { id, type, placeholder } = field

    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor={id} className="font-semibold">{label}</label>
            <div className="w-full flex flex-col gap-2">
                {type === 'textarea' ? (
                    <textarea 
                        id={id}
                        {...register(id, { required: true })}
                        placeholder={placeholder}
                        className="text-base py-2 px-4 rounded border border-slate-400 outline-none h-36 resize-none overflow-y-scroll"
                    ></textarea>
                ) : (
                    <input 
                        type={type} 
                        id={id}
                        {...register(id, { required: true })} 
                        placeholder={placeholder}
                        className={`rounded border border-slate-400 outline-none ${
                            type === 'file'
                            ? 'text-[0.95em] p-2 bg-white file:bg-main file:text-white file:py-2 file:px-3 file:mr-3 file:rounded file:border-none'
                            : 'py-2 px-4 text-base'
                        }`}
                    />
                )}
                {error && <InputError className="-mt-1" error={error} />}
            </div>
        </div>
    )
}

export default FormField