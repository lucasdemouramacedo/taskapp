import style from './Button.module.css'

function Button(props){
    return(
        <button
            className={style.button}
            style={{
                color: props.color ? props.color : 'var(--white)',
                backgroundColor: props.backgroundColor ? props.backgroundColor : 'var(--primary-color)',
                fontSize: props.small ? '11px' : '20px',
                fontWeight: props.small ? '500' : '600',
                height: props.small ? '32px' : '50px',
                borderRadius: props.small ? '10px' : '15px'
            }}
        >
            {props.label}
        </button>
    );
}

export default Button