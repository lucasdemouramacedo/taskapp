import { FaCheck } from "react-icons/fa";
import style from './Checkbox.module.css'
import { useState } from 'react'

function Checkbox() {
    const [state, setState] = useState(false)

    const handleClick = (e) => {
        setState(!state)
    };
    return (
        <div
            onClick={handleClick}
            className={style.checkbox}
            style={{ backgroundColor: state ? 'var(--primary-color)' : 'var(--grey)' }}
        >
            <FaCheck
                className={style.icon}
                style={{ color: state ? 'var(--white)' : 'var(--grey)' }}
            />
            <input 
                name="check" 
                id="check" 
                type="checkbox" 
                checked={state}  
                readOnly 
            />
        </div>
    )
}

export default Checkbox