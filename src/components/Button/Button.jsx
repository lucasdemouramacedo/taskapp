import style from './Button.module.css'

function Button(props){
    return(
        <button className={style.button}>{props.label}</button>
    );
}

export default Button