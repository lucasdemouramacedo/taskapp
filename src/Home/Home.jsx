import style from './Home.module.css'
import { MdOutlineCalendarMonth } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";


function Home() {
    return (
        <div className={style.main}>
            <div className={style.header}>
                <CgMenuLeft className={style.icon} />
                <MdOutlineCalendarMonth className={style.icon} />
                <div className={style.info}>
                    <h2 className={style.date}>Mai, 2024</h2>
                    <span className={style.qttTasks}>3 tarefas</span>
                </div>
            </div>
            <div className={style.container}>
            </div>
        </div>
    )
}

export default Home