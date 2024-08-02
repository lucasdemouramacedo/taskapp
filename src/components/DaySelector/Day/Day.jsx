import style from './Day.module.css'


function Day(props) {
    const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    return (
        <>
            {props.day == 1 && <li className={style.month}>mai</li>}
            <li
                className={style.day}
                style={{ backgroundColor: props.selected && props.selected == props.date ? 'var(--primary-color)' : 'var(--grey)' }}
                onClick={() => props.setSelected(props.date)}>
                <div
                    className={style.weekDay}
                    style={{ color: props.selected == props.date ? 'var(--white)' : 'var(--grey-2)' }}
                >
                    {weekDays[props.weekDay]}
                </div>
                <div className={style.dayNumber}>
                    {props.day}
                </div>
            </li>
        </>
    )
}

export default Day