import style from './Day.module.css'


function Day(props) {
    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
    return (
        <li 
        className={style.day} 
        style={{backgroundColor: props.selected && props.selected == props.day ? 'var(--primary-color)' : 'var(--grey)'}}
        onClick={() => props.setSelected(props.day)}>
            <div 
            className={style.weekDay}
            style={{color: props.selected == props.day ? 'var(--white)' : 'var(--grey-2)'}}
            >
                {weekDays[props.weekDay]}
            </div>
            <div className={style.dayNumber}>
                {props.day}
            </div>
        </li>
    )
}

export default Day