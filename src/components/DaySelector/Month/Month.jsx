import MonthEnum from '../../../constants/MonthEnum'
import style from './Month.module.css'


function Month(props) {

    return (
        <li className={style.month}>
            <span>
                {MonthEnum.getShort(props.month)}
            </span>
        </li>
    )
}

export default Month