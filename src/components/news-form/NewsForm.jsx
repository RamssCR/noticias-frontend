import { useForm } from 'react-hook-form'
import { fields } from '@/utils/fields.config'
import FormField from './FormField'
import Button from '../UI/Button'

// eslint-disable-next-line react/prop-types
function NewsForm({ type }) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [newsFields, groupedFields, fileFields] = fields

    return (
        <form 
            method='post' 
            className="w-full flex flex-col items-center gap-5 py-4 px-5 bg-gray-300 rounded mt-6 shadow-lg max-w-[37em] md:py-6 md:px-7"
            onSubmit={handleSubmit(values => {
                console.log(values)
            })}
        >
            {newsFields.map((newsField, index) => (
                <FormField 
                    key={index} 
                    label={newsField.label} 
                    field={newsField.field}
                    register={register}
                    error={errors[newsField.field.id] && newsField.error} 
                />
            ))}
            <div className="w-full flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-x-3">
                {groupedFields.map((groupedField, index) => (
                    <FormField
                        key={index}
                        label={groupedField.label}
                        field={groupedField.field}
                        register={register}
                        error={errors[groupedField.field.id] && groupedField.error}
                    />
                ))}
            </div>
            <div className="w-full flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-x-3">
                <div className="flex flex-col gap-3">
                    <label className="font-semibold" htmlFor="category">Categoria</label>
                    <select className="py-2 px-4 border border-slate-400 rounded" {...register('categoria', { required: true })} id="category">
                        <option value="">-- Selecciona una categoria --</option>
                        <option value="1">Inteligencia Artificial</option>
                        <option value="2">Salseo</option>
                    </select>
                </div>
                <div className="flex flex-col gap-3">
                    <label className="font-semibold" htmlFor="tag">Etiqueta</label>
                    <select className="py-2 px-4 border border-slate-400 rounded" {...register('etiqueta', { required: true })} id="tag">
                        <option value="">-- Selecciona una etiqueta --</option>
                        <option value="1">Nuevo</option>
                        <option value="2">Tendencia</option>
                    </select>
                </div>
            </div>
            {fileFields.map((fileField, index) => (
                <FormField
                    key={index}
                    label={fileField.label}
                    field={fileField.field}
                    register={register}
                    error={errors[fileField.field.id] && fileField.error}
                />
            ))}
            <Button className="bg-main text-white w-full max-w-72 rounded">
                {type === 'create' ? 'Crear Noticia' : 'Actualizar Noticia'}
            </Button>
        </form>
    )
}

export default NewsForm