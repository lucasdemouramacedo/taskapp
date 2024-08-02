import style from './DaySelector.module.css'
import Day from './Day/Day.jsx'
import { useEffect, useState, useRef } from 'react'

function DaySelector() {
    let today = new Date;
    const [days, setDays] = useState([])
    const [selected, setSelected] = useState(today.toISOString().split('T')[0])
    const elementRef = useRef(null);
    const [startDay, setStartDay] = useState(0)

    useEffect(() => {
        let today = new Date;
        let days = []
        today.setDate(today.getDate() + startDay);
        for (var i = 0; i <= 10; i++) {
            days.push({
                'day': today.getDate(),
                'weekDay': today.getDay(),
                'date': today.toISOString().split('T')[0],
            })
            today.setDate(today.getDate() + 1);
        }
        setDays(days)
    }, [])

    useEffect(() => {
        let today = new Date;
        let days = []
        let scrollPosition = elementRef.current.scrollLeft
        today.setDate(today.getDate() + startDay);
        for (var i = 0; i <= 10; i++) {
            days.push({
                'day': today.getDate(),
                'weekDay': today.getDay(),
                'date': today.toISOString().split('T')[0],
            })
            today.setDate(today.getDate() + 1);
        }
        setDays(days)
        elementRef.current.scrollLeft = scrollPosition
    }, [startDay])

    useEffect(() => {
        const iO = new IntersectionObserver((entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                if (entries[0].target.id == 'sentinelLeft') {
                    setStartDay(startDay - 1)
                    elementRef.current.scrollLeft = 95

                } else if (entries[0].target.id == 'sentinelRight') {
                    setStartDay(startDay + 1)
                    elementRef.current.scrollLeft = elementRef.current.scrollLeft - 55
                }
            }
        })

        iO.observe(document.querySelector('#sentinelLeft'))

        iO.observe(document.querySelector('#sentinelRight'))

        return () => iO.disconnect()
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
                            date={day.date}
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