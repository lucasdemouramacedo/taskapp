import style from './DaySelector.module.css'
import Day from './Day/Day.jsx'
import { useEffect, useState, useRef } from 'react'

function DaySelector(props) {
    const [days, setDays] = useState([])
    const [selected, setSelected] = useState(props.today.toISOString().split('T')[0])
    const elementRef = useRef(null)
    const [startDay, setStartDay] = useState(0)

    useEffect(() => {
        let today = new Date()
        today.setDate(today.getDate() + startDay);
        let days = []
        for (var i = 0; i <= 10; i++) {
            let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            days.push({
                'day': today.getDate(),
                'weekDay': today.getDay(),
                'month': today.getMonth(),
                'date': today.toISOString().split('T')[0],
                'lastDayOfMonth': lastDayOfMonth
            })
            today.setDate(today.getDate() + 1)
        }
        setDays(days)
    }, [startDay])

    useEffect(() => {
        const iO = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                if (entries[0].target.id == 'sentinelLeft') {
                    setStartDay(startDay - 1)
                    elementRef.current.scrollLeft = 65
                } else if (entries[0].target.id == 'sentinelRight') {
                    setStartDay(startDay + 1)
                    elementRef.current.scrollLeft = elementRef.current.scrollLeft - 65
                }
            }
        })
        iO.observe(document.querySelector('#sentinelLeft'))
        iO.observe(document.querySelector('#sentinelRight'))

        return () => iO.disconnect()
    })

    return (
        <ul key="daySelector" ref={elementRef} className={style.slider}>
            <li id="sentinelLeft" key="sentinelLeft" className={style.sentinel}></li>
            {
                days.map((day, index) => {
                    return (
                        <>
                            <Day
                                key={index}
                                day={day.day}
                                weekDay={day.weekDay}
                                month={day.month}
                                selected={selected}
                                date={day.date}
                                setSelected={setSelected}
                                today={props.today} 
                                setToday={props.setToday}
                            />
                        </>
                    )

                })
            }
            <li id="sentinelRight" key="sentinelRight" className={style.sentinel}></li>
        </ul>
    )
}

export default DaySelector