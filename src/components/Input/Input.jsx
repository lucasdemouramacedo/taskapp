import style from './Input.module.css'

function Input(props){
    return (
        <div className={style.field}>
            <p className={style.label}>{props.label}</p>
            <input className={style.input} type={props.type ? props.type : "text"} />
            <p className={style.error}>{props.error}</p>
        </div>
    );
}

export default Input