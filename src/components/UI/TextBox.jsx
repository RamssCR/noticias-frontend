import searchIcon from '@/assets/magnifying-glass.svg'
import Icon from './Icon'

// eslint-disable-next-line react/prop-types
function TextBox({ onInput, placeholder, className, hasIcon = true }) {
    return (
        <div className='w-fit flex items-center gap-4 p-3 border border-gray-300 bg-slate-100 rounded'>
            <input 
                type="text" 
                placeholder={placeholder}
                onInput={onInput}
                className={`py-3 rounded placeholder:text-gray-400 outline-none ${className ?? 'bg-transparent px-4'}`}
            />
            {hasIcon && <Icon icon={searchIcon} alt="search" />}
        </div>
    )
}

export default TextBox