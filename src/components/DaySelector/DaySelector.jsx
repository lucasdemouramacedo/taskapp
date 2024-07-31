import style from './DaySelector.module.css'
import Day from './Day/Day.jsx'
import { useEffect, useState, useRef } from 'react'

function DaySelector() {
    let today = new Date;
    const [days, setDays] = useState([])
    const [selected, setSelected] = useState(today.getDate())
    const elementRef = useRef(null);

    useEffect(() => {
        let today = new Date;
        let days = []
        today.setDate(today.getDate() - 1);
        for (var i = 0; i <= 10; i++) {
            days.push({
                'day': today.getDate(),
                'weekDay': today.getDay(),
            })
            today.setDate(today.getDate() + 1);
            console.log(today.getDate());
        }
        setDays(days)
    }, [])

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollLeft = 45
        }
        console.log('cu')
    })

    return (
        <ul ref={elementRef} className={style.slider}>
            <li id="sentinelLeft" key="sentinelLeft" className={style.sentinel}></li>
            {
                days.map((day, index) => {
                    return (
                        <Day
                            key={index}
                            day={day.day}
                            weekDay={day.weekDay}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    )
                })
            }
            <li id="sentinelRight" key="sentinelRight" className={style.sentinel}></li>
        </ul>
    )
}

export default DaySelector