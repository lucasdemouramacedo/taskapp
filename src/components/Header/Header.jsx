import style from './Header.module.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import Button from '../Button/Button.jsx'
import Month from '../../constants/MonthEnum.js';

function Header(props) {
    return (
        <div className={style.header}>
            <CgMenuLeft className={style.icon} />
            <MdOutlineCalendarMonth className={style.icon} />
            <div className={style.info}>
                <h2 className={style.date}>{props.today.getDate()} {Month.getShort(props.today.getMonth())}, {props.today.getFullYear()}</h2>
                <span className={style.qttTasks}>3 tarefas</span>
            </div>
            <div className={style.newTask}>
                <Button
                    label="Nova tarefa"
                    backgroundColor="var(--white)"
                    color="var(--primary-color)"
                    small
                />
            </div>
        </div>
    )
}

export default Header