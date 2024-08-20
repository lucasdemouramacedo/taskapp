import Checkbox from '../../Checkbox/Checkbox.jsx';
import style from './Task.module.css'
import SplitButton from '../../SplitButton/SplitButton.jsx';

function Task(props) {
    return (
        <li className={style.task}>
            <div className={style.container}>
                <Checkbox />
                <div className={style.info}>
                    <p className={style.title}>{props.title}</p>
                    {
                        props.startTime && <p className={style.time}>{props.startTime} - {props.endTime}</p>
                    }
                </div>
            </div>
            <SplitButton />
        </li>
    )
}

export default Task