import style from './Home.module.css'
import Header from '../components/Header/Header.jsx'
import DaySelector from '../components/DaySelector/DaySelector.jsx'
import { useEffect, useState, useRef } from 'react'

function Home() {
    const [today, setToday] = useState(new Date())
    return (
        <div className={style.main}>
            <Header today={today} />
            <div className={style.container}>
                <DaySelector today={today} setToday={setToday} />
            </div>
        </div>
    )
}

export default Home